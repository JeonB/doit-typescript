// 어떤 변수가 함수 표현식을 담고 있다면, 변수 이름 뒤에 함수 호출 연산자를 붙여서 호출할 수 있음
// 함수 호출이란 함수 표현식의 몸통 부분
let functionExpression = function (a, b) {
  return a + b;
};
let value = functionExpression(1, 2);
