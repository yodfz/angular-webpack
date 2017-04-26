var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/controller/index.js',
        vendor:['angular']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        chunkFilename: 'js/[id].[chunkhash].js',
        filename:'[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:'vendor.bundle.js'}),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './src/index.html'),
            inject: true
        })
    ],
    devServer: {
        // 热加载
        hot: true,
        // 自刷新
        inline: true
    }
};

// if (module.hot) {
//     require('angular-webpack-hmr').modifyAngular();
// }