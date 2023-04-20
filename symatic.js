const forge = require('node-forge');

let plantext = 'hello world .... dfsdfasdfasd';
let key = forge.random.getBytesSync(16); // AES128 => 16 , AES192 => 24 , AES256 =>32
let iv1 = forge.random.getBytesSync(16); // 128 bits block size => 16
console.log('plantext: ' + plantext);
console.log('key: ' + forge.util.bytesToHex(key));
console.log('iv1: ' + forge.util.bytesToHex(iv1));

//송신자 암호화
let cipher = forge.cipher.createCipher('AES-CBC', key);
cipher.start({ iv: iv1 }); //앞은 오브젝트의 키값 뒤는 iv의 값 (이니셜 백터)
cipher.update(forge.util.createBuffer(plantext));
cipher.finish();
let encrypted = cipher.output;
console.log('Ciphertext' + encrypted.toHex());
//송신자 --> 수신자 (iv ,encrypted)
//ket 는 공개키로 암호화하여 전송

//수신사 복호화
let decipher = forge.cipher.createDecipher('AES-CBC', key);
decipher.start({ iv: iv1 });
decipher.update(encrypted);
let result = decipher.finish();
console.log('result: ' + result);
console.log('Decryted: ' + Decrypted.output);
