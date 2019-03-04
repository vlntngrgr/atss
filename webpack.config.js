/*
 * /webpack.config.js - Webpack configuration
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

/* eslint-disable */

const webpack = require("webpack");
const {
    resolve
} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
    const plugins = [
        new webpack.EnvironmentPlugin({
            NODE_ENV: env === "dev" ? "development" : "production",
            VERSION: require("./package.json").version,
            BUILD_TIME: Date.now(),
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "./src/index.html"),
            path: "../",
        }),
    ];

    let optimization = {};

    if (env !== "dev") {
        optimization = {
            runtimeChunk: "single",
            splitChunks: {
                chunks: "all",
                maxInitialRequests: Infinity,
                minSize: 0,
                maxSize: 20000,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            const packageName = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
                            )[1];

                            return `npm.${packageName.replace("@", "")}`;
                        },
                    },
                },
            },
        };
    }

    return {
        mode: env === "dev" ? "development" : "production",
        devtool: env === "dev" ?
            "cheap-module-eval-source-map" :
            "hidden-source-map",
        context: resolve(__dirname, "./src/client"),
        entry: ["./app.js"],
        module: {
            rules: [{
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]",
                        },
                    }, ],
                },

                {
                    test: /\.css$/,
                    use: [
                        "style-loader", // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    use: [{
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: env === "development",
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                            ],
                            plugins: [
                                [
                                    "@babel/plugin-proposal-decorators",
                                    {
                                        legacy: true,
                                    },
                                ],
                                "@babel/plugin-proposal-object-rest-spread",
                                [
                                    "@babel/plugin-proposal-class-properties",
                                    {
                                        loose: true,
                                    },
                                ],
                            ],
                        },
                    }, ],
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
            ],
        },
        plugins,
        optimization,
        performance: {
            hints: false
        },
        output: {
            path: resolve(__dirname, "./bin/client"),
            filename: env === "dev" ? "js/bundle.js" : "js/[chunkhash].js",
        },
        devServer: {
            historyApiFallback: true,
            },
    };
};