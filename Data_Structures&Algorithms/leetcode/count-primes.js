/**
 * 统计所有小于非负整数 n 的质数的数量。
 */
var countPrimes = function (n) {
  const isPrimes = new Array(n).fill(1);
  let res = 0;
  for (let i = 2; i < n; i++) {
    if (isPrimes[i]) {
    //   console.log(i);
      res = res + 1;
    }
    for (let j = i * i; j < n; j = j + i) {
    //   console.log(i, j);
      isPrimes[j] = 0;
    }
  }
  return res;
};

console.log(countPrimes(7));
