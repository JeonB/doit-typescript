const oArray = [1, 2, 3, 4];
const deepCopiedArray = [...oArray];
deepCopiedArray[0] = 100;
console.log(oArray, deepCopiedArray); // [1, 2, 3, 4] [100, 2, 3, 4]
