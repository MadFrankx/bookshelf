var ImageminPlugin = require('imagemin-webpack-plugin').default
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: __dirname + "/docs"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: __dirname + "/docs"
  },
  plugins: [
    new ImageminPlugin({
      pngquant: {
        quality: '30'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader"
          }
        ]
      }
    ]
  }
}
