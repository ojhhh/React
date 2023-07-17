//  배열안에 공통된 숫자 찾기

function commonElements(kArray) {
  let temp = {};
  let result = {};
  let arr = [];
  for (i in kArray) {
    temp = new Set(kArray[i]);
    temp.forEach((e) => {
      result[e] = (result[e] || 0) + 1;
    });
  }

  for (k in result) {
    if (result[k] == kArray.length) {
      arr.push(k);
    }
  }
  return arr;
}

console.log(
  commonElements([
    [1, 2],
    [1, 2, 3, 4],
    [1, 2],
  ])
); // [1, 2];
