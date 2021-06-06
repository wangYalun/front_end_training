function throttle(method, waiting) {
  var lastRunTime = 0;
  return function () {
    var now = +new Date();
    if (now - lastRunTime >= waiting) {
      method.apply(this, arguments);
      lastRunTime = now;--
    }
  };
}

const fn = throttle((name) => {
  //   console.log(+new Date()/1000);
  console.log(name);
}, 100);

// setInterval(()=>{
//     fn();
// },100)

setTimeout(() => {
  fn(50);
}, 50);
setTimeout(() => {
  fn(100);
}, 100);
setTimeout(() => {
  fn(160);
}, 160);
