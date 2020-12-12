const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.svg', '.jpg', '.png', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(svg)$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: './src/assets/svg',
                            emitFile: false,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|jpe?g)$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: './src/assets/img',
                            emitFile: false,
                        },
                    },
                ],
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        https: false,
        hot: true,
        open: true,
        port: 9000,
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
};
