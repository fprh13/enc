const forge = require('node-forge');
let inputText = 'hash input , 해시함수 테스트 입력';
console.log('해시함수 입력:' + inputText);

let md = forge.md.md5.create();
md.update(inputText);
let result = md.digest().toHex();
console.log('MD5해시 출력:' + result);
``;

let md1 = forge.md.sha1.create();
md.update(inputText);
let result1 = md1.digest().toHex();
console.log('SHA1해시 출력:' + result1);
``;
