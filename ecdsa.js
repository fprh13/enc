const forge = require('node-forge');
const ed25519 = forge.pki.ed25519;

let plaintext = 'sdfsdfs';

//송신자 키생성
let keyPair = ed25519.generateKeyPair();
console.log(keyPair);
let publicKey = keyPair.publicKey;
let privateKey = keyPair.privateKey;
console.log('공개 키 ', publicKey);
console.log('비밀 키 ', privateKey);

//송신자 사명생성 송신자 개인키 이용
let md1 = forge.md.sha256.create();
md1.update(plaintext, 'utf8');
let signature1 = ed25519.sign({
  md1: md1,
  privateKey: privateKey,
});
console.log('signature1 : ', forge.utill.bytesTohex(signature1));

//송신자 - > 수신자

// 수신자 서명검증 송신자 공개키 이용

// let md2 = forge.md.sha256.create();
// md2.update(plaintext, 'utf8');
// let result1 = ed25519.verify({
//   md2: md2,
//   signature1: signature1,
//   publicKey: publickey,
// });
// console.log('signature : ', forge.utill.bytesTohex(signature));
