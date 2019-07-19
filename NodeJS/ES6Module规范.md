### ES6Module

#### 模块
```
// name.js
export default {
    name:"allen"
}
// index.js
import obj from './name.js';
console.log(obj.name);// allen
```
> ES6 Module 将每个文件作为一个模块，每个模块拥有自身的作用域。默认开启严格模式

#### 导出
- 命名导出
```
// 写法一
export const name = "allen";
export const add = function(a,b){return a+b}
// 写法二
const name = "allen";
const add = function(a,b){return a+b};
export {name,add}
```
- 默认导出
```
export default 'This is name.js';
```

#### 导入
```
import {name,add} from './name';
```
> 在导入多个变量时，我们还可以采用整体导入的方式。 如：
```
import * as obj from './name';
console.log(obj); {name:"allen",default:function}
```
> 使用import * as myModule 可以把所有导入的变量作为属性添加到myModule 对象中，从而减少了对当前作用域的影响

