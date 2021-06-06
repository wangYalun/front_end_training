const obj = require("./name.js");

console.log(obj.name); //allen
console.log(obj.myName); // bob

obj.name = "bob";
obj.myName = "cici";
console.log(obj.name); // bob
console.log(obj.myName); // bob

console.log(require("./name.js").name); //bob
console.log(require("./name.js").myName); //bob
