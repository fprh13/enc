const forge = require('node-forge');

let password = 'sdsldled';
let it = 100000;
let keysize = 16;
let salt = forge.random.getBytesSync(16);
// 동기 식 키 생성
let derivedKey = forge.pkcs5.pbkdf2(password, salt, it, keysize);

console.log('password :', password);
console.log('salt :', forge.util.bytesToHex(salt));
console.log('key :', forge.util.bytesToHex(derivedKey));
// 비동기 식 키 생성
forge.pkcs5.pbkdf2(password, salt, it, 32, function (err, derivedKey) {
  if (derivedKey) console.log('key-sync :', forge.util.bytesToHex(derivedKey));
});
