const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');
const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';
const devtool = isProduction ? false : 'inline-source-map';
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const clientConfig = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    // plugins: [new HtmlWebpackPlugin()], 
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.ejs'],
        plugins: [new TsconfigPathsPlugin()],
    },
    devtool: 'inline-source-map', // Enable to debug typescript code
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env'],
                        }
                    }
                ]
            },
            {
                test: /\.(tsx|ts)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'src/images/',
                            name: '[name][hash].[ext]',
                        },
                    },
                ],
            }
        ]
    }
};

module.exports = [clientConfig];
