let inputText = 'hash input , 해시함수 테스트 입력';
console.log('해시함수 입력:' + inputText);

let md = forge.md.md5.create();
md.update(inputText);
let result = md.digest().toHex();
document.write('MD5해시 출력:' + result + '<br>');
document.getElementById('result').innerHTML = result;

let md1 = forge.md1.sha1.create();
md1.update(inputText);
let result1 = md1.digest().toHex();
document.write('SHA1해시 출력:' + result1 + '<br>');
document.getElementById('result').innerHTML = result1;

let md2 = forge.md2.sha256.create();
md2.update(inputText);
let result2 = md2.digest().toHex();
document.write('SHA256해시 출력:' + result2 + '<br>');
document.getElementById('result').innerHTML = result2;

let md3 = forge.md3.sha382.create();
md3.update(inputText);
let result3 = md3.digest().toHex();
document.write('SHA384해시 출력:' + result3 + '<br>');
document.getElementById('result').innerHTML = result3;

let md4 = forge.md4.sha512.create();
md4.update(inputText);
let result4 = md4.digest().toHex();
document.write('SHA3512해시 출력:' + result4 + '<br>');
document.getElementById('result').innerHTML = result4;
