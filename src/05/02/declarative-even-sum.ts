import { filter } from "ramda";
import { range } from "../01/rage-test";
import { fold } from "./fold";

let numbers: number[] = range(1, 100 + 1);
const isEven = (n: number): boolean => n % 2 === 0;
let result = fold(
  filter(isEven, numbers),
  (result, value) => result + value,
  0
);
console.log(result); // 2550
