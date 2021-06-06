const curry = function (fn, args) {
  const length = fn.length;
  const cacheArgs = args || [];

  return function (...subArgs) {
    // console.log(_args);
    const newArgs = [...cacheArgs, ...subArgs];
    if (newArgs.length >= length) {
      return fn.apply(this, newArgs);
    } else {
      return curry.call(this, fn, newArgs);
    }
  };
};

const add = curry(function (a, b, c, d) {
  return [a, b, c, d];
});

const add12 = add(1, 2, 3);

console.log(add12(2));
console.log(add12(3));
console.log(add12(4));
console.log(add12(5));
