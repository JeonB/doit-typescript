export const filter = <T>(
  arr: T[],
  callback: (value: T, index?: number) => boolean
): T[] => {
  let result: T[] = [];
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];
    if (callback(value, index)) {
      result.push(value);
    }
  }
  return result;
};
