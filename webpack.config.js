const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/js')
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
            },
            {
                test: /.(js|jsx)/,
                loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        compact: false
                    }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '大亚湾数据可视化平台',
            filename: '../index.html',
            template: './src/index.html'
        })
    ],

  devServer: {
    contentBase: [path.resolve(__dirname, './dist')],
    compress: false,
    port: 8868,
    inline: true,
  },
}