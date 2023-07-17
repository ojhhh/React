// 배열 출력 (재귀함수) (미완성)

function swap(strArr, idx1, idx2) {
  let temp = [...strArr];
  temp[1] = idx2;
  temp[2] = idx1;
  return console.log(temp);
}

function permute(strArr, begin, end) {
  for (let i = 0; i < strArr.length - 1; i++) {
    swap(strArr, begin, end);
  }
  return console.log(strArr);
}

function permuteArray(strArr) {
  for (let i = 0; i < strArr.length - 1; i++) {
    permute(strArr, strArr[1], strArr[2]);
  }
  return;
}

permuteArray(["1", "2", "3"]);
