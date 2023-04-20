const bcrypt = require('bcrypt');

let saltround = 10;
let myPassword = 'sdfsdfsdf';
let myPassword1 = myPassword + '1';
console.log('passworld :' + myPassword);
// 사용자 등록
bcrypt.hash(myPassword, saltround, function (err, hash) {
  console.log('passwordHash :', hash);

  let dbHash = hash;
  // 로그인 비동기식
  bcrypt.compare(myPassword, dbHash, function (err, result) {
    console.log('비동기식 => \t로그인 성공 : ' + myPassword + result);
  });
  bcrypt.compare(myPassword1, dbHash, function (err, result1) {
    console.log('비동기식 => \t로그인 실패 : ' + myPassword1 + result1);
  });

  // 비동기식
  let result = bcrypt.compareSync(myPassword, dbHash);
  let result1 = bcrypt.compareSync(myPassword1, dbHash);
  console.log('동기식 =>\t' + myPassword + '  ' + result);
  console.log('동기식 =>\t' + myPassword1 + '  ' + result1);
});
