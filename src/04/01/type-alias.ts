// 타입 별칭 사용
type stringNumberFunc = (string, number) => void;
let f: stringNumberFunc = function (a: string, b: number): void {};
let g: stringNumberFunc = function (c: string, d: number): void {};
