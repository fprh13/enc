const forge = require('node-forge');
const rsa = forge.pki.rsa;

let keyPair = rsa.generateKeyPair({ bits: 2048 });
// console.log('Key paor: ', keyPair);
let publicKey = keyPair.publicKey;
let privateKey = keyPair.privateKey;

console.log('public Key: ', publicKey);
console.log('private Key: ', privateKey);

console.log('public Key>>\n ', forge.pki.publicKeyToPem(publicKey));
console.log('\n');
console.log('private Key>>\n ', forge.pki.privateKeyToPem(privateKey));
console.log('\n');
console.log('p= ' + privateKey.p);
console.log('\n');
console.log('q= ' + privateKey.q);
console.log('\n');
console.log('n=p*q= ' + publicKey.n);
console.log('\n');
console.log('e= ' + publicKey.e);
console.log('\n');
console.log('d= ' + privateKey.d);

// let planText = '안녕';
// let planTextutf8 = forge.util.encodeUtf8(planText);
// // @@@@@@@@@@@@

// let encrypted = publicKey.encrypt(planTextutf8);
// console.log('\n암호문 >> \n' + forge.util.bytesToHex(encrypted));

// let decrypted = privateKey.decrypt(encrypted);
// console.log('\n복호화 암호분 >> \n' + forge.util.decodeUtf8(decrypted));

let planText = '안녕';
let planTextutf8 = forge.util.encodeUtf8(planText);
// @@@@@@@@@@@@

let encrypted = publicKey.encrypt(planTextutf8);
console.log('\n암호문 >> \n' + forge.util.bytesToHex(encrypted));

let decrypted = privateKey.decrypt(encrypted);
console.log('\n복호화 암호분 >> \n' + forge.util.decodeUtf8(decrypted));
