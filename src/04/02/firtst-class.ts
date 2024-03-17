export {};

// f가 변수인지 함수인지 구분할 수 없음
let f = function (a, b) {
  return a + b;
};
f = function (a, b) {
  return a - b;
};
