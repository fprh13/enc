const forge = require('node-forge');
const rsa = forge.pki.rsa;
// 1. 송신자 rsa키생성
const keyPair = rsa.generateKeyPair({ bites: 2048 });
// 2 송신자 키 캡슐화
var kdf1 = new forge.kem.kdf1(forge.md.sha1.create()); //키생성
var kem = forge.kem.rsa.create(kdf1);
var result = kem.encrypt(keyPair.publicKey, 32);
// result.encapsulation
// result.key

// 대칭키 암호화 3. 송진자 대칭키 암호화
var iv = forge.random.getBytesSync(12);
var someBytes = 'hello world!';
var cipher = forge.cipher.createCipher('AES-GCM', result.key);
cipher.start({ iv: iv });
cipher.update(forge.util.createBuffer(someBytes));
cipher.finish();
var encrypted = cipher.output.getBytes();
var tag = cipher.mode.tag.getBytes();

console.log('Plaintext: ' + someBytes);
console.log('Key: ' + forge.util.bytesToHex(result.key));
console.log();
console.log('Ciphertext: ' + forge.util.bytesToHex(encrypted));
console.log('IV: ' + forge.util.bytesToHex(iv));
console.log('Tag: ' + forge.util.bytesToHex(tag));
console.log('Encapsulation: ' + forge.util.bytesToHex(result.encapsulation));
console.log('<Ciphertext, IV, Tag, Encapsulation>을 수신자에게 전송');
console.log();
// 4. 키 복구
var kdf1 = new forge.kem.kdf1(forge.md.sha1.create());
var kem = forge.kem.rsa.create(kdf1);

// 캡슐화된 키로부터 개인키로 복호화하여 대칭키 복구
var key = kem.decrypt(keyPair.privateKey, result.encapsulation, 16);
console.log('Key: ' + forge.util.bytesToHex(key));

// 5. 대칭키 복호화
var decipher = forge.cipher.createDecipher('AES-GCM', key);
decipher.start({ iv: iv, tag: tag });
decipher.update(forge.util.createBuffer(encrypted));
var pass = decipher.finish();

// pass is false if there was a failure (eg: authentication tag didn't match)
if (pass) {
  // outputs 'hello world!'
  console.log('Deciphered: ' + decipher.output.getBytes());
}
