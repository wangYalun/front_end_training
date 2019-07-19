const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcRoot = path.resolve(__dirname, './src');
const distRoot = path.resolve(__dirname, './dist');

module.exports = {
    context: path.resolve(__dirname, "./src"), // context可以理解为资源入口的路径前缀，在配置时要求必须使用绝对路径的形式，context可以省略，默认值为当前工程的根目录。
    entry: {
        app: './app.js'
    },
    // 入口文件,
    /** entry的配置可以是多种形式：字符串，数组，对象，函数 */
    // 字符串：直接传入文件路径：./index.js
    // 数组类型入口，传入一个数组的作用是将多个资源预先合并，在打包的时候webpack会将数组中的最后一个元素作为实际的入口路径
    output: {
        path: distRoot,
        // filename: "app.js"
    },
    mode: "development",
    devServer: {
        contentBase: distRoot, // 标识server 文件的根目录
        port: 3000,
        compress: true // 表示开启gzip
    },
    module: {
        // 加载器配置
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: distRoot
                    }
                }, {
                    loader: 'css-loader'
                }, 'postcss-loader'],
                include: srcRoot, // 规定 该规则只对 srcRoot 目录里的css文件生效
                // exclude:/nodel_modules/ exclude 优先级更高
                issuer: {
                    test: /\.js$/,
                    include: srcRoot // 规定只有srcRoot目录下的js文件可以应用CSS
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: distRoot
                    }
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }],
                include: srcRoot, // 规定 该规则只对 srcRoot 目录里的css文件生效
                // exclude:/nodel_modules/ exclude 优先级更高
                issuer: {
                    test: /\.js$/,
                    include: srcRoot // 规定只有srcRoot目录下的js文件可以应用CSS
                }
            },
            { test: /\.(png|jgp|jpeg|gif)$/, use: ['url-loader?limit=8192&name=images/[name].[hash].[ext]'], include: srcRoot },
            {
                test: /\.(js|jsx)$/,
                use: [
                    { loader: "force-strict-loader" }, // 通过NPM 软链安装
                    { loader: 'babel-loader' },
                    { loader: 'eslint-loader' }
                ],
                // enfore:pre , //代表它将在所有正常loader之前执行，这样可以保住其检测的代码不是被其他loader更改过的。post 代表最后执行
                include: srcRoot
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(distRoot, 'index.html'),
            template: path.resolve(srcRoot, './index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    // optimization: {
    //     // Automatically split vendor and commons
    //     // https://twitter.com/wSokra/status/969633336732905474
    //     // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
    //     splitChunks: {
    //         chunks: 'all',
    //         name: true,
    //     },
    //     // Keep the runtime chunk separated to enable long term caching
    //     // https://twitter.com/wSokra/status/969679223278505985
    //     runtimeChunk: true
    // },

}