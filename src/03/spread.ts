//잔여 연산자
let test1 = { x: 0 };
let test2 = { y: 0 };
let coord = { test1, test2 };
let coord2 = { ...{ x: 0 }, ...{ y: 0 } };
console.log(coord);
console.log(coord2);

let part1 = { name: "jane" },
  part2 = { age: 22 },
  part3 = { city: "Seoul", country: "Kr" };
let merged = { ...part1, ...part2, ...part3 };
console.log(part1, part2, part3);
console.log(merged);
