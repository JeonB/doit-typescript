export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];

let numbers: number[] = range(1, 9 + 1);
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
