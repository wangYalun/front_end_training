function* example() {
  yield 1;
  yield 2;
  yield 3;
}

const res = example();

// let d = null;
// while (!(d = res.next()).done) {
//   console.log(d);
// }

for (let i of res) {
  console.log(i);
}
for (let i of res) {
  console.log(i);
}
