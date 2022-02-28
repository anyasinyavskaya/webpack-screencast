
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
module.exports = {
    context: __dirname + '/frontend',

    entry: {
        app: './app'
    },

    output: {
        path:     __dirname + '/public/js',
        publicPath: '/js/',  //   /js/app.js
        filename: "[name].js"
    },

    mode: NODE_ENV,
    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV === 'development'? "inline-cheap-module-source-map" : null,

    plugins: [
        new webpack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/,}),
    ],
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                common: {
                    name: 'common',
                }
            }
        }
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['', '.js'],
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader",
            }
        }],
    },
}

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true,
            }
        })
    )
}