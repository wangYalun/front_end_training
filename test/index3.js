function check(text) {
  return /\d/.test(text);
}
function getAllNumber(text) {
  // 'kldfjlkjwifw&&*87394*&&*wejfw7s8d7sd8'
  // 只能用check确定是否是数字，并且使用二分法去查找
  const n = text.length;
  if (n <= 1) {
    return check(text)?text:"";
  }
  if (!check(text)) {
    return "";
  }
  const mid = Math.floor(n / 2);
  let leftNum = getAllNumber(text.slice(0, mid));
  let rightNum = getAllNumber(text.slice(mid));
  return leftNum + rightNum;
}

console.log(getAllNumber("fasdfasdfasdfas122&7234sfa"));
