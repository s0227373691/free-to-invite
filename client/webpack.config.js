const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', path.join(__dirname, 'index')],
    output: {
        path: path.resolve(__dirname, '../server/dist'),
        filename: 'bundle.js',
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
                        presets: ['@babel/preset-env', '@babel/preset-react'],
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
                            publicPath: './assets/img',
                            outputPath: './assets/img',
                            emitFile: true,
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
                            publicPath: './assets/img',
                            outputPath: './assets/img',
                            emitFile: true,
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
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
};
