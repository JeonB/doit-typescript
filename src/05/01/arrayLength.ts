export const arrayLength = <T>(arr: T[]): number => arr.length;
export const isEmpty = <T>(arr: T[]): boolean => arrayLength(arr) === 0;
