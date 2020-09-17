const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const sourcePath = `${process.cwd()}/src/`

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      src: sourcePath,
      app: `${sourcePath}app/`,
      middleware: `${sourcePath}app/middleware/`,
      actions: `${sourcePath}app/actions/`,
      components: `${sourcePath}app/components/`,
      store: `${sourcePath}app/store/`,
      utilities: `${sourcePath}app/utilities/`,
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      // { test: /\.json$/, loader: 'json-loader' },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],
}
