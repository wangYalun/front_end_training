/**
 * jsx 合成时间 refs
 */

/**
 * JSX是JavaScript的一个扩展语法，React官方推荐使用这种语法来描述UI信息
 */

// JSX 最终包含的信息是:元素标签，元素属性，子元素，用JavaScript 表示的话
const jsxObj = {
  tag: "div",
  atrrs: { className: "num", index: 1 },
  children: [
    {
      tag: "span",
      atrrs: null,
      children: null,
    },
  ],
};
// 为什么需要虚拟DOM
// 1. 除了渲染普通的页面，还可能渲染到canvas或者原生APP
// 2. diff比较的时候，用虚拟DOM性能更高

// 合成事件
// React17 最大的改动就是事件合成的方式变化
// React 16 和 React 17 的区别

/**
 * Refs & DOM
 */
// 这是一种用于方放render方法中创建的DOM节点或React元素的方式。一般用于：
// 1. 处理表单、媒体控制
// 2. 触发强制动画
// 3. 集成第三方DOM库
