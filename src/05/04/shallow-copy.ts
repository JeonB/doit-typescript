const originalArray = [5, 3, 9, 7];
const shallowCopiedArray = originalArray;
shallowCopiedArray[0] = 100;
console.log(originalArray, shallowCopiedArray); // [100, 3, 9, 7] [100, 3, 9, 7]
