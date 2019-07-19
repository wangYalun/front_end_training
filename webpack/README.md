### WebPack 学习

#### webpack 简介

#### 模块打包
- CommonJS

- ES6 Module

- AMD (Asynchronous Module Definition) 异步模块定义

- UMD (Universal Module Definition)  通用模块标准
> 严格来说，UMD并不能说是一种模块标准，说它是一组模块形式的集合更准确，它的目标是使一个模块能运行在各种环境下，不论是CommonJS ,AMD 还是非模块化的环境。
```
(function (global, main) {
    // 根据当前环境采取不同的导出方式
    if (typeof define === 'function' && defind.amd) {
        // AMD
        define(/*...*/);
    } else if (typeof exports === 'object') {
        module.exports = {
            /** */
        }
    } else {
        global.add = function (ab) { }/**allen */;
    }
})(this,function(){
    return {/** ...*/}
})
```

- 加载npm模块
> 每一个npm模块都有一个入口，当我们加载一个模块时，实际上就是加载该模块的入口文件。这个入口被维护在模块内部的package.json文件的main字段里面
```
// package.json
{
    main:"index.js"
}
```
> 除了直接加载模块外，我们也可以通过 <package_name>/<path>的形式单独加载模块内部的某个JS文件。例如：
```
import all from 'loadsh/fp/all.js';  // 只会加载 node_modules/lodash/fp/all.js 这个文件
```
- 模块打包原理


#### 资源输入输出
> 如何定义产品的原材料从哪里来，以及组装后的产品送到哪里去。
- 资源处理流程
> 首先指定一个或多个入口，告诉webpack 从哪个文件开始打包，每一个入口都会产生一个结果资源。比如我们在工程中有两个入口src/index.js,src/lib.js ,在一般情况下会打包成dist/index.js ,dist/lib.js

#### 配置资源入口
> webpack 通过context和entry 这两个配置项来共同决定入口文件的路径。在配置入口时，实际上做了两件事：
- 确定入口模块位置，告诉webpack从哪里开始打包
- 定义chunk name。如果工程只有一个入口，那么默认其chunk name 为main。如果工程多个入口，那么需要为每个入口定义chunk name，来作为chunk 的唯一标识。
```
 // context可以理解为资源入口的路径前缀，在配置时要求必须使用绝对路径的形式，context可以省略，默认值为当前工程的根目录。
 module.exports={
     context:path.resolve(__dirname,'./src'),
     entry:'./index.js'
 }
 // 配置context 的主要目的是让entry 的编写更加简洁。
```
**entry**
> entry的配置可以是多种形式：字符串，数组，对象，函数 
```
// 字符串：直接传入文件路径：./index.js
module.exports = {
    entry:'./src/index.js'
}
// 数组类型入口，传入一个数组的作用是将多个资源预先合并，在打包的时候webpack会将数组中的最后一个元素作为实际的入口路径
module.exports = {
    entry:['babel-polyfill','./src/index.js']
}
等同于
// webpack.config.js
module.exports = {
    entry:'./src/index/js'
}
// index.js
import 'babel-polyfill';

// 对象类型入口，如果要定义多入口，必须要用对象的形式。对象的属性名(key)是chunk name,属性值时入口路径
module.exports = {
    entry:{
        index:'./src/index.js',
        lib:'./src/lib.js',
        vendor:['jquery','./src/lib.js'] // 属性值可以为数组
    }
}
*注：webpack 4移除了CommonsChunkPlugin，采用的是optimization.splitChunks

``` 

#### 资源配置出口

```
module:exports={
    output:{
        filename:'[name]@[chunkhash].js',
        path:path.resolve(__dirname,'dist'),// webpack 4.0 默认在dist 中
    }
}
```

### 预处理器
---
```
module.exports = {
    module:{
        rules:[
            {
            test:/\.css$/,
            use:['style-loader','css-loader'],
            include:path.resolve(__dirname,'src'), // include 代表该规则只对正则匹配到的模块生效。
            }
        ]
    }
}
```


