const path = require("path");

module.exports = {
  mode: "development",
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
};
