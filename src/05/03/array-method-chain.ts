export {};
const multiply = (result: number, value: number) => result * value;

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tempResult = numbers
  .filter((value) => value % 2 !== 0)
  .map((value) => value * value)
  .reduce(multiply, 1);
let result = Math.round(Math.sqrt(tempResult));
console.log(result); // 945
