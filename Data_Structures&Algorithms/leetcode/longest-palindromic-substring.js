/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//     const n=s.length;
//     if(n<=2){
//         return s;
//     }
//     const strArr=[...s];
//     if(strArr.join('')==strArr.reverse().join("")){
//         return s;
//     }else{
//         longestPalindrome(str)
//     }

// };
var longestPalindrome = function (s) {

  let n = s.length,
    ans = {
      start: 0,
      end: 0,
      maxLen: 1,
    };

  for (let i = 0; i < n; i++) {
    let rk = n - 1;

    while (rk > i) {
      let substr = [...s.substring(i, rk + 1)];
      console.log(substr);
      if (substr.join("") == substr.reverse().join("")) {
        break;
      }
      //   maxArr.push(s[rk + 1]);
      rk--;
    }
    // console.log(maxArr);
    if (ans.maxLen < rk - i + 1) {
      ans.maxLen = rk - i + 1;
      ans.start = i;
      ans.end = rk;
    }
    console.log(ans);
  }
  return s.substring(ans.start, ans.end + 1);
};
const res = longestPalindrome("cbbd");
console.log(res);
