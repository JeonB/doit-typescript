export type Person = { name: string; age: number };
// 객체 관련 단축 구문 적용
export const makePerson = (name: string, age: number = 10): Person => {
  const person = { name, age };
  return person;
};
console.log(makePerson("Jack"));
console.log(makePerson("Jane", 33));
