const obj = require('./name.js');

console.log(obj.name); //allen

obj.name = "bob";
console.log(obj.name); // bob

console.log(require('./name.js').name);  //bob