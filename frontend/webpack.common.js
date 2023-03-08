const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "/src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // chunks: ['main'],
      favicon: "./assets/img/favicon.png",
    }),
    // TODO
    // new HtmlWebpackPlugin({
    //   template: "./src/404.html",
    // }),
  ],
};
