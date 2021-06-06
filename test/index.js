console.log(process.argv[2])


function fn(num) {
  const str = "" + num;
  const arr = str.split(".");
  let flag = 0;
  const temp = [];
  let tempNum = "";
  [...arr[0]].reverse().forEach((item) => {
    if (flag === 3) {
      temp.push(tempNum);
      tempNum = "";
      flag = 0;
    } else {
      flag++;
      tempNum += item;
    }
  });
  temp.push(tempNum);
  console.log(temp)
  let res = [...(temp.join(","))].reverse().join("");
  if (arr[1]) {
    res = res + "." + arr[1];
  }
  return res;
}

console.log(fn(1234564243234));
