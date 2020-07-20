const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const rootPath = path.resolve(__dirname, '..')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  entry: path.resolve(rootPath, 'src', 'App.tsx'),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(rootPath, 'dist'),
    historyApiFallback: true,
    hot: true,
    port: 4000
  },
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: 'js/[name].js',
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, 'public', 'index.html')
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
}
