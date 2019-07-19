module.exports = function (content) {
    var useStrictPrefix = '\'use strict\';\n\n';
    return useStrictPrefix + content;
}