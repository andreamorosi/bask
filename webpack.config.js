"use strict";
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


const DEV_MODE = process.env.NODE_ENV;
let isProduction = false;

if( DEV_MODE == 'production'){
  isProduction = true;
}

const entry = {
  main: path.resolve("./index.js")
};

const plugins = [
  new MiniCssExtractPlugin({
    filename: "brisa.min.css"
  }),
];


const optimization = {
  minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
};

const cssRules = {
  test: /\.s[ac]ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    {
        loader: 'css-loader',
        options: {
            url: false,
            importLoaders: 2,
            sourceMap: true,
            esModule: false
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            plugins: () => [
                require('autoprefixer')
            ],
            sourceMap: true
        }
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true
        }
    }
]
};

const legacyConfig = {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("./build")
  },
  entry,
  module: {
    rules: [
      {
        test: /\js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                targets: {
                  "browsers": [
                    ">0.5%",
                    "not ie < 10",
                    "not op_mini all"
                  ]
                },
                "corejs": 3
              }
            ]
          ]
        }
      },
      cssRules
    ]
  },
  plugins,
  optimization
};

const moduleConfig = {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("./build")
  },
  entry,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                targets: {
                  esmodules: true
                },
                "corejs": 3
              }
            ]
          ]
        }
      },
      cssRules
    ]
  },
  plugins,
  optimization
};

module.exports = [legacyConfig];
