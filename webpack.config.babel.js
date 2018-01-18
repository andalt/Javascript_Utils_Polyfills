const NODE_ENV = process.env.NODE_ENV || 'development';

import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const DEV = NODE_ENV !== 'production';

const extractStyles = new ExtractTextPlugin({
    filename: 'css/[name].css',
    allChunks: false
});

console.log('NODE_ENV = ', NODE_ENV);

const config = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        index: 'js/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    devtool: NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: extractStyles.extract({
                    use: 'css-loader' + (DEV ? '' : '?minimize=true') + '!sass-loader'
                })

            },
            {
                test: /\.(eot|ttf|woff|woff2|jpe?g|png|gif|svg)$/,
                loader: 'file-loader?name=[path][name].[ext]'
                // use: 'file-loader'
            },
            {
                test: /\.pug$/,
                loaders: ['file-loader?name=[name].html', 'pug-html-loader']

            }
        ]
    },
    devServer: {
        compress: true,
        port: 8080,
        inline: true
    },
    resolve: {
        modules: ['./src', 'node_modules'],

        alias: {
            Styles: path.resolve(__dirname, './src/scss'),
            Js: path.resolve(__dirname, './src/js'),
            Pug: path.resolve(__dirname, './src/pug')
        }
    },
    plugins: DEV ? [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(DEV)
        }),
        extractStyles
    ] : [
        new CleanWebpackPlugin(path.resolve(__dirname, './build')),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(DEV)
        }),
        extractStyles,
        new UglifyJSPlugin()
    ]

};

module.exports = config;
