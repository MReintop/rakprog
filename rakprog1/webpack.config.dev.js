const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const{HotModuleReplacementPlugin} = require("webpack")

module.exports = {
    mode:'development',
    entry:['./src/app.js'],
    devServer:{
        hot:true,
        watchOptions:{
            poll:true
        }
    },
    module:{
        rules:[
            {test:/\.vue$/, use:"vue-loader"},
            {test:/\css$/, use:["vue-style-loader", "css-loader"]},
            {test:/\.js$/, use:"babel-loader"}
        ]
    },
    plugins:[
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
             filename:'index.html',
             template:'index.html',
             inject:true
        })
    ]
}
