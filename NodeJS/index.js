// const mathjs = require("mathjs");
// console.log(0.3 - 0.2);
// console.log(mathjs.subtract(0.3, 0.2));

const p = function () {
  return Promise.resolve(1);
};
const rej = function () {
  return Promise.reject("try catch test");
};
const q = p().then(() => {
  return 2;
});
(async function () {
  const res = await p();
  console.log(res);
  const res2 = await q;
  console.log(res2);
  try {
    const r = await rej();
  } catch (error) {
    console.log(error);
  }
})();
