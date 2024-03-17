interface IAgeable {
  age?: number | null;
}

function getAge(o: IAgeable) {
  return o !== undefined && o.age ? o.age : 0;
}
let obj: IAgeable = { age: undefined };
let nullObj: IAgeable = { age: null };
console.log(getAge(obj));
console.log(getAge(nullObj));
console.log(getAge({ age: 32 }));
