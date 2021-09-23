const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
    // other-name: path-to-file => it renders another file
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "..", "build"),
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
  plugins: [new CleanWebpackPlugin()],
};
