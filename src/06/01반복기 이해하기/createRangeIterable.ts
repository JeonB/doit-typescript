// 1. 반복기 iterator 는 next 메서드를 제공한다.
// 2. next 메서드는 value 와 done 을 가진 객체를 반환한다.

export const createRangeIterable = (from: number, to: number) => {
  let currentValue = from;
  return {
    next() {
      const value = currentValue < to ? currentValue++ : undefined;
      const done = value === undefined;
      return { value, done };
    },
  };
};
