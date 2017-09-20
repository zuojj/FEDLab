const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ENV = process.env.ENV;
let plugins = [];
let filename;

function resolve(dir) {
    return path.join(__dirname, dir)
}

console.log('production' === ENV);
if ('production' === ENV) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
    filename = 'calculator.min.js';
}else {
    plugins.push(new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname)
    }));
    filename = 'calculator.js';
}

console.log(plugins);

module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: filename,
        library: 'Calculator',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test')]
        }]
    },
    plugins: plugins
};