export function* generator() {
  //function* 는 그 자체가 하나의 키워드이다.
  console.log("generator started...");
  let value = 1;
  while (value < 4) {
    yield value++;
  }
  console.log("generator finished...");
}

/* yield 키워드
    1. yield 키워드는 function* 안에서만 사용할 수 있다.
    2. 반복기를 자등오르 만들어 준다.
    3. 반복기 제공자 역할도 수행한다.
    4. return과 비슷한 역할을 하지만, 함수를 종료시키지 않고 값을 계속 반환한다.
*/
