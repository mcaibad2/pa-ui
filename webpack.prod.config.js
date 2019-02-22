const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const autoprefixer = require('autoprefixer');
const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "production",
    devtool: "cheap-module-eval-source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        library: "pa",
        libraryTarget: "umd",
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },

    plugins: [
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })
    ],
    externals: [
        "react",
        "rdx",
        { "rdx/semantic-ui-react": "rdxSemanticUIReact" },
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['/node_modules'],
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: "[name]__[local]__[hash:base64:5]"
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "url-loader?limit=8000&name=images/[name].[ext]"
            }
        ]
    }
};