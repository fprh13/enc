const forge = require('node-forge');
let message = 'hello world , 헬로월드';
let key = 'dlfajsl;kdfj;alskjdfksjfdla';
console.log('message:' + message);
document.write('message' + message + '<br>')
console.log('ket' + key);
document.write('key'+key + '<br>')

let hmac = forge.hmac.create();
hmac.start('md5', key);
hmac.update(message);
let result = hmac.digest().toHex();
console.log('HAMC-MD5' + result);
document.write('HAMC-MD5' + result + '<br>')
document.getElementById('reult').innerHTML = result

let hmac1 = forge.hmac.create();
hmac1.start('sha1', key);
hmac1.update(message);
let result1 = hmac.digest().toHex();
console.log('HAMC-SHA1' + result1);
document.write('HMAC-SHA1' + result1 + '<br>')
document.getElementById('reult1').innerHTML = result1

let hmac2 = forge.hmac.create();
hmac2.start('SHA256', key);
hmac2.update(message);
let result2 = hmac.digest().toHex();
console.log('HAMC-SHA256' + result2);
document.write('HMAC_SHA256' + result2 + '<br>')
document.getElementById('reult2').innerHTML = result2

let hmac3 = forge.hmac.create();
hmac3.start('sha384', key);
hmac3.update(message);
let result3 = hmac.digest().toHex();
console.log('HAMC-SHA384' + result3);
document.write('HMAC-SHA384' + result3 + '<br>')
document.getElementById('reult3').innerHTML = result3

let hmac4 = forge.hmac.create();
hmac4.start('sha512', key);
hmac4.update(message);
let result4 = hmac.digest().toHex();
console.log('HAMC-SHA512' + result4);
document.write('HMAC-SHA512' + result4 + '<br>')
document.getElementById('reult3').innerHTML = result3