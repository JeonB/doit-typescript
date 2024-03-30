export function* gen() {
  let count = 5;
  let select = Math.round(Math.random() * 10);
  while (count--) {
    select = yield `you select ${select}`;
  }
}
export const random = (max: number, min: number = 0) =>
  Math.round(Math.random() * (max - min)) + min;
