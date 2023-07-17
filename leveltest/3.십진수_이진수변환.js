// 재귀함수

function base10ToString(n) {
  let temp = "";

  function base10ToStringHelper(n) {
    if (n > 0) {
      base10ToStringHelper(Math.floor(n / 2));

      return (temp += (n % 2).toString());
    }
  }
  base10ToStringHelper(n);
  return temp;
}

console.log(base10ToString(100)); // 1100100
