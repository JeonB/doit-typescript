const identity = <T>(n: T): T => n;
console.log(
  identity(1),
  identity("Hello"),
  identity<boolean>(true), // 원칙적으로 타입 변수를 명시해야 하지만, 타입 추론으로 인해 생략 가능
  identity(true)
);
