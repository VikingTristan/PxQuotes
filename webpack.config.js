const {
    VueLoaderPlugin
} = require("vue-loader");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
    module: {
        rules: [
            //JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            //VUE
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            //HTML
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            },
            //CSS
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js" // <-- Full version, we could eventually go runtime-only with "vue.runtime.esm.js"
        }
    },
    devServer: {
        disableHostCheck: true
    },
    plugins: [
        new VueLoaderPlugin(), 
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new Dotenv()
    ]
};