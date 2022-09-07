const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// const isDev = process.env.NODE_ENV === 'development'
// const isProd = !isDev

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            // minify: {
            //     collapseWhitespace: isProd
            // }
        }),
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: '[name].[contenthash].css'
        // })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.png$/,
                use: ['file-loader']
                
            },
            {
                test: /\.(woff|woff2)$/,
                use: ['file-loader']
            }
        ]
    }
}