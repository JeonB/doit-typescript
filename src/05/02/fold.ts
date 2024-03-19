export const fold = <T>(
  array: T[],
  callback: (result: T, value: T) => T,
  initialValue: T
) => {
  let result: T = initialValue;
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    result = callback(result, value);
  }
  return result;
};
