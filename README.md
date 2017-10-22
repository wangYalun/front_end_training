### 1. 环境安装

1. 安装NodeJS 
- [Node 64](https://npm.taobao.org/mirrors/node/v8.7.0/node-v8.7.0-x64.msi)
- [Node 32](https://npm.taobao.org/mirrors/node/v8.7.0/node-v8.7.0-x86.msi)

2. 安装编辑器
- [Visual Studio Code](https://code.visualstudio.com/Download)
- [Sublime Text 3](https://download.sublimetext.com/Sublime%20Text%20Build%203143%20x64%20Setup.exe)

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