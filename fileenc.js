const forge = require('node-forge');
const fs = require('fs'); //파일을 불러와 사용 할 수 있는 모듈

let inputfile = 'input.txt';
let encryptedfile = inputfile + 'enc';
let decryptedfile = encryptedfile + 'dnc';

//송신자, salt 는 수신자에게 전달 해줘야 함
put = fs.readFileSync(inputfile, { encording: 'binary' });
console.log('AES-128 CBC');
let keySize = 16; // 16 ,24 ,32 선택 할 수 있다
let numOfIterations = 100;
let salt = forge.random.getBytesSync(16);
let password = 'sdfsdfasdfdasf';
let key = forge.pkcs5.pbkdf2(password, salt, numOfIterations, keySize);
let iv = forge.random.getBytesSync(16);

console.log('AES-128 CBC');
console.log('password: ' + password);
console.log('salt: ' + forge.util.bytesToHex(salt));
console.log('key: ' + forge.util.bytesToHex(key));
console.log('iv: ' + forge.util.bytesToHex(iv));

let cipher = forge.cipher.createCipher('AES-CBC', key);
cipher.start({ iv: iv });
cipher.update(forge.util.createBuffer(inputfile, 'binary'));
cipher.finish();
let encrypted = cipher.output;

let output = forge.util.createBuffer();
if (salt != null) {
  output.putBytes('salt_1');
  output.putBytes(salt);
}
output.putBuffer(encrypted);
// 파라미터 파일명 , 출력 ,인코딩 순서
fs.writeFileSync(encryptedfile, output.getBytes(), { encording: 'binary' });
console.log('Cipertest is saved in' + encryptedfile);

//수신측 피피티 참고
