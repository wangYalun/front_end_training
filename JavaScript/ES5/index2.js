// function without(arr, ...withoutNums) {
//   console.log(Array.isArray(withoutNums));
//   return arr.filter((item) => !withoutNums.concat(item));
// }
// let arr = [1, 2, 3, 2, 3, 4, 5, 6, 6];
// console.log(without(arr, 1, 3, 5));

// function without(arr, ...withoutNums) {
//   for (let i = 0, len = withoutNums.length; i < len; i++) {
//     while (true) {
//       let matchIndex = arr.indexOf(withoutNums[i]);
//       if (matchIndex < 0) {
//         break;
//       }
//       arr.splice(matchIndex, 1);
//     }
//   }
//   //return arr.filter(item=>(!withoutNums.includes(item)))
// }
// let arr = [1, 2, 3, 2, 3, 4, 5, 6, 6];
// console.log(without(arr, 6));
// console.log(arr);


function Test(){
  this.name="allen";
  return {age:28}
}
const allen=new Test();
console.log(allen);