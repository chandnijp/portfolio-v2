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
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                   use: [
                     'file-loader',
                     {
                       loader: 'image-webpack-loader',
                       options: {
                         mozjpeg: {
                          progressive: true
                        },
                        // optipng.enabled: false will disable optipng
                        optipng: {
                          enabled: false
                        },
                        pngquant: {
                          quality: [0.65, 0.9],
                          speed: 4
                        },
                        gifsicle: {
                          interlaced: false
                        },
                        // the webp option will enable WEBP
                        webp: {
                          quality: 75
                        }
                      }
                    }
                  ]
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
