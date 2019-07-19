//postcss.config.js
const autoprefixer = require("autoprefixer");
const stylelint = require('stylelint');
module.exports = {
    plugins: [
        // autoprefixer({
        //     grid: true,
        //     browserlist: [
        //         '>1%',
        //         'last 3 versions',
        //         'android 4.2',
        //         'ie 8'
        //     ]
        // }),
        stylelint({
            config: {
                rules: {
                    // 'declaration-no-important': true
                }
            }
        })
    ]
}