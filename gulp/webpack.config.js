import config from "./config";
import webpack from "webpack";

const path = require("path");

module.exports = {
  mode: config.production ? "production" : "development",
  entry: {
    index: "./" + config.src.js + "/index.js",
    pricing: "./" + config.src.js + "/pricing.js",
    case: "./" + config.src.js + "/case.js",
    faq: "./" + config.src.js + "/faq.js",
    locale: "./" + config.src.js + "/locale.js",
  },

  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/",
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "all",
          name: "vendor",
          enforce: true,
          minSize: 1,
          minChunks: 2,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: [["@babel/preset-env", { modules: false }]],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery",
    }),
  ],

  resolve: {
    alias: {
      "%components%": path.resolve(__dirname, "_dev/components"),
    },
  },
};
