Function.prototype.bind2 = function (context, ...args1) {
  const self = this;

  function returnFun(...args2) {
    return self.apply(this instanceof returnFun ? this : context, [
      args1,
      ...args,
    ]);
  }
  function fn() {}
  fn.prototype = self.prototype;
  returnFun.prototype = new fn();
  return returnFun;
};
