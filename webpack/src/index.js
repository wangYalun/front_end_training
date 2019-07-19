import addContent from './chapter-1/add-content';

import * as myModule from './chapter-1/add-content';

document.write("this is webpack index.js");

document.write("这是使用webpack配置文件打包");

document.write("这是live-reloading加载出来的东西");

console.log("allen");
console.log(myModule);

addContent();