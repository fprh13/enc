const forge = require('node-forge');
const algo = 'AES-GCM';
// Modes: ECB, CBC, CFB, OFB, CTR, and GCM)
console.log('Algorithm-mode: ' + algo);
const plaintext = 'Hello world Hello world';
const authData = 'binary-encoded string';
var someBytes = forge.util.encodeUtf8(plaintext);
console.log('Plaintext: ' + plaintext);
// generate a random key and IV
// Note: a key size of 16 bytes will use AES-128, 24 => AES-192, 32 = > AES-256
var key = forge.random.getBytesSync(16); // 16, 24, 32
var iv = forge.random.getBytesSync(16); // 16
console.log('Key: ' + forge.util.bytesToHex(key));
console.log('IV: ' + forge.util.bytesToHex(iv));

// encrypt some bytes using GCM mode
var cipher = forge.cipher.createCipher(algo, key);
cipher.start({
  iv: iv,
  additionalData: 'binary-encoded string',
  tagLength: 128,
  tag: tag,
});
cipher.finish();
var encrypted = cipher.output;
var tag = cipher.mode.tag;
console.log('Encrypted: ' + encrypted.toHex());
console.log('Tag: ' + tag.toHex());
var decipher = forge.cipher.createDecipher(algo, key);
decipher.start({
  iv: iv,
  additionalData: 'binary-encoded string',
  tagLength: 128,
  tag: tag,
});
decipher.update(encrypted);
var pass = decipher.finish();

if (pass) {
  //   console.log('Deciphered: ' + decipher.output.toHex());
  console.log(decipher);
}
