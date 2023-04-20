const forge = require('node-forge');
const rsa = forge.pki.rsa;

//키생성
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

// // 사명생성 송신자가 개인키로 서명
// let md1 = forge.md.sha256.create();
// forge.md.update(plaintext, 'utf8');
// let sig1 = privatekey.sign(md1);
// console.log('sig1' + forge.utill.byteTohex(sig1));
// console.log('sig1 ', sig1);

// //서명 검증 수신자가 공개키로 섬증
// let md2 = forge.md.sha256.create();
// md2.update(plaintext, 'utf8');
// let result1 = publicKey.verify(md2, sig2);
// console.log('Result', result1);

// //서명 검증 수신자가 송신자의 공개키로 검증
// let md3 = forge.md.sha256.create();
// md2.update(plaintext, 'utf8');
// let result3 = publicKey.md.verify(md3,pss);
// console.log('Result', result3);
let plantext = 'hello world .... dfsdfasdfasd';
// 사명생성 송신자가 개인키로 서명
let md1 = forge.md.sha256.create();
md1.update(plantext, 'utf8');
let sig1 = privateKey.sign(md1);
console.log('sig1' + forge.utill.bytesTohex(sig1));
console.log('sig1 ', sig1);

//서명 검증 수신자가 공개키로 섬증
let md2 = forge.md.sha256.create();
md2.update(plantext, 'utf8');
let result1 = publicKey.verify(md2, sig2);
console.log('Result', result1);

let md3 = forge.md.sha256.create();
md3.update(plantext, 'utf8');
let sig3 = publicKey.verify(md3, pss);
console.log('sig3 ' + forge.utill.byteTohex(sig3));

let md4 = forge.md.creat()
md4.update(plantest, 'utf8')
let result4 = publicKey.verify(md4.digest(),bytes(), sig3,pss )
console.log('')