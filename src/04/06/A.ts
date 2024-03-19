export class A {
  value: number = 1;
  method: () => void = function (this: A): void {
    console.log(`value: ${this.value}`);
  };
}
