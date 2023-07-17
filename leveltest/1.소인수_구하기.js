// 소인수 인지 판단

function isPrime(n) {
  let result = true;
  if (n % 2 == 0 || n % 3 == 0) {
    result = false;
  }
  return result;
}

console.log(isPrime(31));
