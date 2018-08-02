const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OPTIONS = {
    distPath: path.resolve(__dirname, 'dist')
};

/* ---------------------------------- INDEX PAGE ---------------------------------- */
const IndexPagePlugin = new HtmlWebpackPlugin({
    template: './src/index.html'
});

/* ---------------------------------- MAIN CONFIG ---------------------------------- */
module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: OPTIONS.distPath,
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|dist)/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [IndexPagePlugin]
};