const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: (process.env.NODE_ENV ? process.env.NODE_ENV : 'development'),
  entry: {
    app: './assets/js/common.js',
    home:  './assets/js/home.js'    
  },
  output: {
    path: path.resolve(__dirname, 'public/build'),
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(svg|woff2?|eot|ttf)$/,
        use: {
          loader: 'file-loader',
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        'css-loader',
        'postcss-loader',
        'sass-loader',
        ],
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $               : 'jquery',
      jQuery          : 'jquery',
      Toastr          : path.resolve(path.join(__dirname, './assets/js/modules/toastr')),
      Routing         : path.resolve(path.join(__dirname, './assets/js/modules/router')),
      Translator      : path.resolve(path.join(__dirname, './assets/js/modules/translator'))               
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'all',  
          test: /node_modules/,
          priority: 20
        }
      }
    },
    occurrenceOrder: true,
    runtimeChunk: {
      name: 'manifest'
    }
  }
}