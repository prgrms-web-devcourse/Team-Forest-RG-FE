const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = (env, options) => {
  const prod = options.mode === 'production'

  return {
    mode: prod ? 'production' : 'development',
    devtool: prod ? 'hidden-source-map' : 'eval',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': `${__dirname}/src`
      }
    },
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].js',
      publicPath: '/',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.css?$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|svg|gif|webp)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    },
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react'
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify:
          process.env.NODE_ENV === 'production'
            ? {
                collapseWhitespace: true, // 빈칸 제거
                removeComments: true // 주석 제거
              }
            : false
      })
    ]
  }
}
