
'use strict';
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");    //第三方js单独打包
const webpack = require("webpack");
const pxtorem = require('postcss-pxtorem');
const svgDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
    path.resolve(__dirname, './src/assets/svg/'),  // 2. 自己私人的 svg 存放目录
];  
module.exports = {
    // 是否使用source-map
    devtool: 'eval-source-map',

    entry: {
        main: './src/entry.js', //唯一入口文件
        vendor: ['./src/vendor/jquery.js']      //引入第三方js
    },
    output: {
        path: './build', //打包后的文件存放的地方
        filename: 'main.js', //打包后输出文件的文件名
        publicPath: 'http://localhost:8888/build/',  //启动本地服务后的根目录,
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss")},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass")},
            { test: /\.(png|jpg|gif)$/, loader: 'url?limit=819200'},
            // { test: /\.(svg)$/i, loader: 'svg-sprite', include: [
            //   require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
            //   // path.resolve(__dirname, './src/assets/svg/'),  // 自己私人的 svg 存放目录
            // ]},
            // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
            {test: /\.(svg)$/i,loader: 'svg-sprite',include: svgDirs,}
        ]
    },

    babel: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime', ['import', {
          libraryName: 'antd-mobile',
          style: 'css'
        }]]
    },

    postcss: [
        require('autoprefixer'),   //调用autoprefixer插件,css3自动补全
        pxtorem({ rootValue: 100, propWhiteList: [] })  //pxtorem比例100：1
    ],

    devServer: {
        // contentBase: './src/views'  //本地服务器所加载的页面所在的目录
        port: 8888,     //端口号
        colors: true,  //终端中输出结果为彩色
        historyApiFallback: true,  //不跳转
        inline: true  //实时刷新
    },

    plugins: [
        //css单独打包
        new ExtractTextPlugin('main.css'),  
        //第三方js单独打包
        new CommonsChunkPlugin({    
           name: 'vendor',
           filename: 'vendor.js'
        }),
        // npm引入jquery的$
        new webpack.ProvidePlugin({
          $:"jquery",
          jQuery:"jquery",
          "window.jQuery":"jquery"
        })
    ]

}
