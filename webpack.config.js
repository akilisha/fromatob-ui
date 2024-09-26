const path = require('path');
const dotenv = require('dotenv').config();
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.hbs',
            template: './public/template.html',
            title: "Fron A to B"
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed),
        })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    { loader: 'sass-loader' },
                ],
            },
        ]
    },
};