import path from "path";
import { fileURLToPath } from "url";
import HTMLWebpackPlugin from "html-webpack-plugin"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



export default {
    mode:'development',// 'production' 'development'
    entry: './src/js/app.js',
    devtool: 'source-map',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ],

    },
    plugins: [
        new HTMLWebpackPlugin({template: './index.html'}),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3001,
        hot: true,
    },

}