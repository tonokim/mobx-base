const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')
const AutoDllPlugin = require('autodll-webpack-plugin')


module.exports = {
  mode:'production',
  entry: {
    bundle: [
      "./src/index"
    ],
    // vendor: [
    // ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: "/",
    filename: "[name].[chunkhash:8].js",
    chunkFilename: "[name].[chunkhash:8].js"
  },
  // devtool: 'source-map',
  optimization:{
    minimize: true,
    minimizer:[
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          }
        },
        cache: true,
        // parallel: 8,
        // sourceMap: true,
      }),
      new OptimizeCssAssetsPlugin()
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          priority: -20,
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              plugins() {
                return [autoprefixer('last 2 version')];
              }
            }
          },
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, 
              modules: {
                localIdentName: '[hash:base64:5]',
              },
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              plugins() {
                return [autoprefixer('last 2 version')];
              }
            }
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'less-loader?sourceMap'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
           {
              loader: 'file-loader',
              options: {
                name: '[contenthash].[ext]',
              }
            },
            // {
            //     loader: 'image-webpack-loader',
            //     options: {
            //         mozjpeg: {
            //             progressive: true,
            //         },
            //         gifsicle: {
            //             interlaced: false,
            //         },
            //         optipng: {
            //             optimizationLevel: 7,
            //         },
            //         pngquant: {
            //             quality: '65-90',
            //             speed: 4
            //         }
            //     }
            // }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: false,
      template: './src/index.html',
      minify: { 
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true
      }
    }),
    new AutoDllPlugin({
      inject: true, // will inject the DLL bundles to index.html
      filename:  '[name].[chunkhash:8].dll.js',
      entry: {
        vendor: [
          'react',
          'react-dom',
          'mobx',
          'mobx-react',
          'react-router-dom'
        ]
      }
    }),
    new InlineManifestWebpackPlugin(),
    new MiniCssExtractPlugin({ 
      filename: 'assets/[name].[chunkhash:8].css', 
    }),
    new CopyWebpackPlugin([
      {
        from: `${__dirname}/public`,
        to: `${__dirname}/dist`
      },
    ]),
  ],
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
    }
  }
}