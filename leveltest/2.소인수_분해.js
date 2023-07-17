// 소인수 출력

function primeFactor(n) {
  let arr = [];
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(primeFactor(10));
