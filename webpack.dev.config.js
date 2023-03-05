const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle-name.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: '',
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 4kb
          },
        },
      },
      {
        test: /\.(txt)$/,
        type: "asset/source",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 4kb
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: "/node_modules",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ],
};
