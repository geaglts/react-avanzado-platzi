const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "app.bundle.js",
  },
  mode: "development",
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};