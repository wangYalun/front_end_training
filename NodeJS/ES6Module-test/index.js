import * as myModule from './name';


console.log(myModule);

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