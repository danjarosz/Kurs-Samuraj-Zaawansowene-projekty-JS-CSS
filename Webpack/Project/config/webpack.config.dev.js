const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    // app: "./src/app.js",
    // other-name: path-to-file => it renders another file
  },
  output: {
    filename: "[name]-[contenthash:6].js",
    path: path.resolve(__dirname, "..", "build"),
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "..", "public"),
    host: "localhost",
    port: "5001",
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
    ],
  },
  // plugins
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title: "New app",
      template: "./src/templates/template.html",
    }),
  ],
};
