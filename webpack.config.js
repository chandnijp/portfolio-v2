const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development', // could be dev or prod
    entry: path.resolve(__dirname, 'src/index.js'), // app entry point
    output: {
        path: path.resolve(__dirname, 'dist/'), // build folder
        filename: 'bundle.js' // build entry file name
    },
    module: {
        rules: [
            {
                test: /\.(js)x?$/i,
                exclude: [/node_modules/, /\.(spec|test).(js)x?$/i],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                    compact: true
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            src: path.resolve(__dirname, 'src')
        }
    },
    plugins:
        [
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                inject: true
            }),
            new MiniCssExtractPlugin()
        ]
}
