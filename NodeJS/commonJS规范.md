### CommonJS 规范

#### 模块
```
// calculator.js
var name = 'calculator.js';
// index.js
var name = 'index.js';
require('./calculator.js');
console.log(name); // index.js
```
> 每个模块拥有各自的作用域

#### 导出
> 导出是一个模块向外暴露自身的唯一方式。在CommonJS中，可以通过module.exports导出
```
module.exports = {
    name:'allen',
    add:function(a,b){
        return a+b;
    }
}
```
> CommonJS 模块内部会有衣蛾module对象用于存放当前模块的信息，可以理解成在每个模块的最开始定义了以下对象
```
var module={...};
module.exports={...};
```
> CommonJS 也支持另一种简化的导出方式-直接使用exports
```
exports.name="allen";
exports.add=function(a,b){
    return a+b;
}
```
> 可以理解为
```
var module={
    exports:{}
}
var exports=module.exports; // exports 变量拿到了 module.exports, 这样就很好理解了，为什么不能 exports = {...} 导出，而只能通过exports.name="xxx"导出
```

#### 导入
> 在commonjs中使用require进行模块导入
```
// name.js
module.exports={
    name:"allen"
}
// index.js
const obj = require('./name.js');
console.log(obj.name);// allen
```
> 当我们require一个模块时，会有两种情况：
- require的模块是第一次被加载。这时会首先执行该模块，然后导出内容。
- require的模块曾被加载过。这时该模块的代码不会再次执行，而是直接导出上次执行后得到的结果。
```
// name.js
module.exports = {
    name: "allen"
}
// index.js
const obj = require('./name.js');

console.log(obj.name); //allen

obj.name = "bob";
console.log(obj.name); // bob

console.log(require('./name.js').name);  //bob
```
> 模块会有一个module 对象用来存放信息，这个对象有一个loaded用于记录模块是否被加载过。默认值为false ,当模块第一次被加载和执行过会置为true。
> 有时我们加载一个模块，不需要获取其导出的内容，只是想通过执行它，直接使用require即可
```
require('./task.js');
const moduleNames = ['foo.js','bar.js'];
modulesName.forEach(name=>{
    require('./'+name);
})
``` 

