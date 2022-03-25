const _ = require('lodash');

// 주어진 배열에서 균일하게 배열을 생성
// 균등하게 못 만들 경우 마지막 chunck 는 나머지 요소들
function chunk(array, size = 1) {
  const newArray = [];

  let startIndex = 0;
  let endIndex = size;

  while (endIndex <= array.length) {
    const temp = [];
    while (startIndex < endIndex) {
      temp.push(array[startIndex++]);
    }
    newArray.push(temp);

    endIndex += size;
  }

  if (startIndex === array.length) {
    return newArray;
  }

  const temp = [];
  while (startIndex < array.length) {
    temp.push(array[startIndex++]);
  }
  newArray.push(temp);

  return newArray;
}

module.exports = {
  chunk,
};
