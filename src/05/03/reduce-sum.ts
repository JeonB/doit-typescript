import { range } from "../01/rage-test";

let reduceSum: number = range(1, 100 + 1).reduce(
  (result, value) => result + value,
  0
);
console.log(reduceSum); // 5050
