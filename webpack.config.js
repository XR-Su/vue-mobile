const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const config = require('./config.json')

let entry = {}
let htmlGenerator = []
config.pages.forEach((v) => {
    entry[v] = path.join(__dirname, `./src/pages/${v}/index.js`)
    htmlGenerator.push(new HtmlWebpackPlugin({
        filename: `${v}.html`,
        inject: 'body',
        template: path.join(__dirname, `./src/pages/${v}/index.html`),
        inject: 'body',
        //chunks: ['vendor', v],
        //hash: true
    }))
})
let webpackConfig = {
    devtool: 'source-map',
    target: 'web',
    profile: true,
    entry: entry,
    output: {
        path: __dirname + "/dist",
        filename: "js/[name].js"
    },
    resolve: {
        extensions: ['.vue', '.js', '.scss', '.css', '.html'],
        alias: {
            vue$: 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: 'css-loader',
                                fallback: 'vue-style-loader'
                                // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                            }),
                            scss: ExtractTextPlugin.extract({
                                use: 'css-loader!sass-loader?sourceMap',
                                fallback: 'vue-style-loader'
                            })
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //use: 'css-loader!postcss-loader'
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader?sourceMap',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: 'json-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 2048,
                        name: './images/[name].[ext]'
                    }
                }
            },
            {
                test: /\.woff|\.woff2|\.svg|\.eot|\.ttf/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 2048,
                        name: './fonts/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: 2
        }),*/
        //new ExtractTextPlugin('[name].css')
        new ExtractTextPlugin('[name].css')
    ],
    devServer: {
        contentBase: './dist',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        // colors: true,//在cmd终端中输出彩色日志
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8080,//设置默认监听端口，如果省略，默认为"8080"
        // process: true,//显示合并代码进度
        // hot: true
    },
}
webpackConfig.plugins.push(...htmlGenerator)

module.exports = webpackConfig