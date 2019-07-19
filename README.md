### 1. 环境安装

1. 安装NodeJS 
> Node.js是一个JavaScript运行环境(runtime), 目前前端开发大都依赖于这个环境。 要学会使用Windows 命令行操作。
- [Node 64位](https://npm.taobao.org/mirrors/node/v8.7.0/node-v8.7.0-x64.msi) 如果电脑操作系统是64位的，安装这个
- [Node 32位](https://npm.taobao.org/mirrors/node/v8.7.0/node-v8.7.0-x86.msi) 如果电脑操作系统是32位的，安装这个

2. 安装编辑器
- [Sublime Text 3 非常好用的文本编辑器](https://download.sublimetext.com/Sublime%20Text%20Build%203143%20x64%20Setup.exe)，学习使用文本编辑器的快捷键使用方式也很重要。
- [Visual Studio Code 前端开发利器](https://code.visualstudio.com/Download)

3. 安装浏览器

> 一般前端开发需要安装IE,Chrome,FireFox等浏览器，可百度后自行安装。安装浏览器后要学会浏览器的调试方法。[Chrome浏览器调试大全](https://blog.csdn.net/xueer767/article/details/65936204?locationNum=8&fps=1)

4. Node环境配置
> 打开Windows的命令管理输入界面，win+R ，输入CMD，回车
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
- [慕课网 html+css基础教程](http://www.imooc.com/learn/9)
- [慕课网 JavaScript入门篇](http://www.imooc.com/learn/36)

8. 推荐Web文档网站
> 前端东西繁杂，需要记住一些好用的文档查询网站。
- [MDN Web文档](https://developer.mozilla.org/zh-CN/)，这是一个非常全面的网站，想加强HTML，CSS基础，我认为需要完整的阅读里面的文档，并自己写实验例子。
- [w3school](http://www.w3school.com.cn/html/index.asp)

9. 推荐进阶书籍
> 前端关键的点在于对JavaScript这门语言的掌握程度，所以当了解了前端的基本内容后，就需要加强对前端本质的了解。
- 首先吐血推非常著名的红宝书，《JavaScript高级程序设计》，目前出到了第三版，如果对这本书能了解透彻，那么你的前端技术就上了阶层了。“第几层？”，“额...”
- 然后再推荐非常权威的犀牛书，《JavaScript权威指南》，目前出到了第六版，这本书是JavaScript的内功秘籍，学了这本书，再学习其他的功能啊，框架啊，简直易如反掌。
10. 新技术，工具类和前端框架的学习和使用
> 前面我们学习了HTML，CSS，JavaScript，学到这里我们已经掌握了前端最基本的东西，可以做任何事情。但还是少不了学习工具和框架，毕竟人生苦短，使用前端好用的工具和框架能大量节省我们的开发时间。 前端技术层出不穷，几乎每天都有东西出来，而且每个东西看起来都好像有点用，但是否实际中真的能用到呢，是不是能用别的东西代替，这些都需要我们思考。如果每个东西都去学习的话，那永远学不完。这里给出点建议，1.学那些将会成为标准的东西。 2.学大家都在学的东西。举个例子，现在的大家的前端代码基本上都是用ES2015的写法，如果不学的话，肯定是不能理解的。下面建议学习并持续关注的东西。
- [jQuery](http://jquery.cuishifeng.cn/) 这个不用说，必须要去学习一下，有条件的可以去看下源码，对自己的JavaScript能力肯定是有帮助的。当然不用怀疑自己，为什么别人的JS代码写的这么漂亮，那肯定是经过很多次优化的。
- [Underscore](http://www.css88.com/doc/underscore/) 一个JavaScript实用库，提供了一整套函数式编程的实用功能，但是没有扩展任何JavaScript内置对象。具体用了就知道
- [ES6/ES7](http://es6.ruanyifeng.com/)，这个已经成为了标准了，现在的浏览器也逐渐在支持ES6和ES7。
- [React](https://reactjs.org/docs/hello-world.html)，A JavaScript library for building user interfaces。与[Vue](https://cn.vuejs.org/)，[Angular](https://angular.io/guide/quickstart) 并称三大前端框架，目前非常流行，学习了相应的框架后就会要学习关于这个框架的很多东西，这是一个技术栈。
- 还有大量很好用的东西，这里就不列举了。真正解决痛点了才知道他们的好处。
11. 现代项目开发基本配置
> 假设上面所说的东西你都掌握的非常好，那么恭喜你，你拥有了深厚的内功(HTML,CSS,JavaScript)和华丽的外功（jQuery.js,Underscore.js,React,vue等等）。 那么如果快速开发一个项目，从开发，团队合作，版本管理，测试，部署，上线运行等步骤需要掌握哪些东西呢？
- 学习Git ,Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。推荐一个[Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)，廖雪峰老师写的，我个人认为非常浅显易懂的入门教程，比较形象。需要完全掌握Git的话，可以去看[Git官方文档](https://git-scm.com/docs)。学习Git后，可以去[Github](https://github.com/)注册一个账号，gitHub是一个面向开源及私有软件项目的托管平台，你的个人项目都可以放到Github上去保存，你也可以在上面看一些优秀的项目，具体的话自己百度去了解。
- 学习NPM，NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：1.允许用户从NPM服务器下载别人编写的第三方包到本地使用。 2. 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。 3. 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。可以点击[这里](http://www.runoob.com/nodejs/nodejs-npm.html)学习一下，更多的在于平常的使用。
- 学习打包工具，[webpack](http://www.css88.com/doc/webpack2/concepts/module-resolution/)
- 学习部署静态网页，[Nignx中文文档](http://www.nginx.cn/doc/)
- 学习Linux基本知识，基本操作。[Linux教程](http://www.runoob.com/linux/linux-tutorial.html)

12. 计算机科学基础
> 当你开始把一个个项目实施完成后，千万不要等待着享受荣耀，应该再去做那些需要做的事情。我们回过头来看下学习历程，发现没有学习基本的计算机科学。计算机原理，数据结构与算法，计算机网络，软件工程，面向对象设计与开发，数据库原理和设计等，学习这些其实是加强对这个IT，互联网行业技术的理解，能帮助我们走的更远。
- 推荐书籍《软件设计师教程》，这本书比较全面。
- 如果有条件的话，最好上面提到的技术的书籍都分别买一本，都是计算机科学里专业课本。

13. 全栈之路
> 也许到了这个时候，你发现前端好像没有什么无法解决的需求的。这个时候，我觉得你们可以向全栈进发了。 全栈的东西太多了，一开始不用太着急，学会慢慢延伸。例如我们做前端的时候，经常需要请求后台的接口，有没有想过自己实现一个接口？ 后台接口用什么实现的呢？后台语言有很多，PHP，Java，Python，Node... 既然我们是前端，那就选Node吧， 在做这个之前，需要掌握一些http相关的知识。
- 推荐书籍《NodeJS 深入浅出》
- 推荐框架Express
- [MySQL基础](http://www.runoob.com/mysql/mysql-tutorial.html) MySQL 进阶,推荐书籍《高性能MySQL》
- 推荐 Node MVC 脚手架,包括MySQL,restful api,jwt认证，[node_json_api](https://github.com/wangYalun/node_json_api)

### 学习心态
> 车尔尼雪夫斯基说：自信对伟大的事情来说很重要，它会鼓舞你的任何热情。前端的学习一定要摆正好心态，也许自己什么都不懂，甚至连最基本的计算机操作都不会，这些都没有关系。最最可怕的是知难而退，没有恒心。作为一个程序员，要学习的东西非常多，现在知识获取非常快捷，要养成一个好习惯，遇到不懂得最好去百度一下。 这个教程更多的是告诉你要去学习什么，要用什么工具，具体怎么学习，工具怎么用，这些都是可以自己百度后去学习的。巴尔扎克说过： 一个能思想的人，才真是一个力量无边的人。各位立志做前端的同志们，我给了你路标却不能给你汽车，我给了你盘子却不能给你珍馐，可能，我是给了你一颗小小的子弹，却需要你去勇敢的战斗！加油吧！！