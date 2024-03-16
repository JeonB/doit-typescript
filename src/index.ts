import { Chance } from "chance";
import IPerson from "./person/IPerson";
import Person, { makePerson } from "./person/Person";
import * as R from "ramda";

const chance = new Chance(); //더미 데이터 생성해주는 라이브러리
let persons: IPerson[] = R.range(0, 2).map(
  (n: number) => new Person(chance.name(), chance.age())
);
console.log(persons);

// const testMakePerson = (): void => {
//   let jane: IPerson = makePerson("Jane");
//   let jack: IPerson = new Person("Jack");
//   console.log(jane, jack);
// };

// testMakePerson();
