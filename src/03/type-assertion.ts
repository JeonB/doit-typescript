// 타입 단언 - (<타입>객체) (객체 as 타입)
export default interface Inameable {
  name: string;
}

let obj: object = { name: "Jack" };

let name1 = (<Inameable>obj).name;
let name2 = (obj as Inameable).name;
console.log(name1, name2);
