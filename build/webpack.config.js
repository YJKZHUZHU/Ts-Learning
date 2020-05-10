const {
  resolve
} = require("path");
console.log(resolve(__dirname, "../src/index.ts"))

const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, "../src/index.ts"),
  output: {
    filename: "main.js",
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "ts-loader",
      exclude: /node-modules/,
    }, ],
  },
  devtool: (process.env.NODE_ENV = "production" ? false : "inline-source-map"),
  devServer: {
    port: 8089,
    contentBase: resolve(__dirname, "../dist"),
    stats: 'errors-only',
    compress: false,
    host: 'localhost'
  },
  resolve: {
    extensions: [".js", ".ts", "tsx", ".json"],
    // alise: {
    //   '@': resolve(__dirname,'../src')
    // }
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: [resolve(__dirname, "../dist")],
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../src/template/index.html"),
    }),
  ],
};