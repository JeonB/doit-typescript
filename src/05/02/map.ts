// 입력 타입 T가 출력 타입 Q로 바뀔 수 있음
export const map = <T, Q>(
  array: T[],
  callback: (value: T, index?: number) => Q
): Q[] => {
  let result: Q[] = [];
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    result.push(callback(value, index));
  }
  return result;
};
