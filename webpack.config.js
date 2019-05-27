const path = require("path");
const fs = require("fs");
const lessToJs = require("less-vars-to-js");
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, "./src/app/ant-theme-vars.less"), "utf8"));

//Webpack Plugins
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const compressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
const Dotenv = require("dotenv-webpack");
const WorkboxPlugin = require("workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const isDevelopment = process.env.NODE_ENV === "development" ? true : false;

const postcssLoader = {
  loader: "postcss-loader",
  options: {
    ident: "postcss",
    sourceMap: true,
    plugins: () => [
      autoprefixer({
        browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"]
      })
    ]
  }
};

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [["import", { libraryName: "antd", style: true }]]
        }
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader"
      },
      {
        test: /\.(eot|otf|woff|woff2|ttf)(\?\S*)?$/,
        loader: "url-loader"
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              modifyVars: themeVariables,
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { modules: true, localIdentName: "[name]__[local]___[hash:base64:5]", camelCase: true } },
          "sass-loader",
          postcssLoader
        ]
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new htmlWebpackPlugin({ template: path.resolve(__dirname, "./src/index.html"), meta: { "theme-color": "#a574ff" } }),
    new MiniCssExtractPlugin({
      filename: "spotify-style.css",
      chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new Dotenv(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new WebpackPwaManifest({
      filename: "manifest.json",
      name: "Spotify Music App",
      short_name: "SpotifyMini",
      description: "My Spotify-music app based on spotify-web-api and react.js",
      background_color: "#a574ff",
      crossorigin: "use-credentials",
      icons: [
        {
          src: path.resolve("static/logo.png"),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "spotify-bundle.js"
  },
  mode: process.env.NODE_ENV,
  devServer:
    process.env.NODE_ENV === "development"
      ? {
          contentBase: path.join(__dirname, "build"),
          hot: true,
          compress: true,
          historyApiFallback: true,
          port: 4000
        }
      : {}
};
