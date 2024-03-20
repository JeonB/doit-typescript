import { filter } from "ramda";
import { range } from "../01/range-test";
import { fold } from "./fold";

// 선언형 프로그래밍. numbers 배열에서 짝수만 필터링하고, 그 값들을 모두 더한다.
// 이때 numbers 배열은 명령형 프로그래밍에서와는 달리 변경되지 않는다.
// 즉, 사이드 이펙트가 없다.
let numbers: number[] = range(1, 100 + 1);
const isEven = (n: number): boolean => n % 2 === 0;
let result = fold(
  filter(isEven, numbers),
  (result, value) => result + value,
  0
);
console.log(result); // 2550
