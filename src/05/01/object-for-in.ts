let jack: { [key: string]: string | number } = { name: "Jack", age: 32 };
// for ... in - 배열의 인덱스값 순회
for (let property in jack) {
  console.log(`${property}: ${jack[property]}`);
}
