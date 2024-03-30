import { RangeIterable } from "./RangeIterable";

const iterator = new RangeIterable(1, 3 + 1);

// createRangeIterable 함수와 달리 of 뒤에 사용 가능
for (let value of iterator) {
  console.log(value);
}
