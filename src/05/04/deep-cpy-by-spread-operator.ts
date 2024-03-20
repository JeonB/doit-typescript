const oArray = [1, 2, 3, 4]; // 배열 복사는 기본적으로 얕은 복사이지만, spread operator를 사용하면 깊은 복사가 가능하다.
const deepCopiedArray = [...oArray];
deepCopiedArray[0] = 100;
console.log(oArray, deepCopiedArray); // [1, 2, 3, 4] [100, 2, 3, 4]
