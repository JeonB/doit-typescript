// createRangeIterable 함수를 RangeIterable 클래스로 변환
export class RangeIterable {
  constructor(public from: number, public to: number) {}
  [Symbol.iterator]() {
    const that = this; // next 메서드에서 this를 참조할 수 있도록 상위 스코프의 this를 that에 할당
    let currentValue = that.from;
    return {
      next() {
        const value = currentValue < that.to ? currentValue++ : undefined;
        const done = value === undefined;
        return { value, done };
      },
    };
  }
}
