### 1. 环境安装

1. 安装NodeJS 
- [Node 64](https://npm.taobao.org/mirrors/node/v8.7.0/node-v8.7.0-x64.msi)
- [Node 32](https://npm.taobao.org/mirrors/node/v8.7.0/node-v8.7.0-x86.msi)

2. 安装编辑器
- [Sublime Text 3 非常好用的文本编辑器](https://download.sublimetext.com/Sublime%20Text%20Build%203143%20x64%20Setup.exe)
- [Visual Studio Code 前端开发利器](https://code.visualstudio.com/Download)

3. 安装浏览器

> 一般前端开发需要安装IE,Chrome,FireFox等浏览器，可百度后自行安装。

4. Node环境配置
> 打开Windows的命令管理输入界面，win+R  
```
//全局安装淘宝镜像 cnpm 包管理工具，npm 速度太慢了，所以用这个代替
$ npm install -g cnpm
//安装静态网页服务器http-server
$ cnpm install -g http-server
```
5. 例子：Hello World
```
//找个目录，例如D:/front_end_training
$ mkdir hello  //新建目录
$ cd hello //进入到hello
$ echo 'Hello World' > index.html // 新建html 文件
$ http-server //建立服务器，默认端口号8080
```
> 打开浏览器，输入地址：http://localhost:8080
6. 打开编辑器Sublime Text ，编辑index.html
```
// index.html
<!DOCTYPE html>
<html>
  <head>
    <title>my first html</title>
  </head>
  <body>
    Hello,World ~
  </body>
</html>
```

7. 前端入门推荐学习教程
> 学习前端说白了就是学习JavaScript,html,css三大Web技术
1. [慕课网 html+css基础教程](http://www.imooc.com/learn/9)
2. [慕课网 JavaScript入门篇](http://www.imooc.com/learn/36)

8. 推荐Web文档网站
> 前端东西繁杂，需要记住一些好用的文档查询网站。
1. [MDN Web文档](https://developer.mozilla.org/zh-CN/)，这是一个非常全面的网站，想加强HTML，CSS基础，我认为需要完整的阅读里面的文档，并自己写实验例子。
2. [w3school](http://www.w3school.com.cn/html/index.asp)

9. 推荐进阶书籍
> 前端关键的点在于对JavaScript这门语言的掌握程度，所以当了解了前端的基本内容后，就需要加强对前端本质的了解。
1. 首先吐血推非常著名的红宝书，《JavaScript高级程序设计》，目前出到了第三版，如果对这本书能了解透彻，那么你的前端技术就上了阶层了。“第几层？”，“额...”
2. 然后再推荐非常权威的犀牛书，《JavaScript权威指南》，目前出到了第六版，这本书是JavaScript的内功秘籍，学了这本书，再学习其他的功能啊，框架啊，简直易如反掌。

10. github 这是一个免费的代码管理网站。
> 这个暂时先不说吧，你现在看的就是我提交到github上的内容。
