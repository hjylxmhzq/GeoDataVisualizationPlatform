const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/js/'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /.(le|c)ss$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },{
                test: /.(js|jsx)/,
                loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        compact: 'auto'
                    }
            },{
                test: /\.(jpg|jpeg|png|json)$/,
                use: ['file-loader']
            }
        ]
    },

  devServer: {
    contentBase: [path.resolve(__dirname, './dist')],
    hot: true,
    port: 8868,
  },
}