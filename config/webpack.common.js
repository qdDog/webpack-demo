const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: [
      // 'webpack-hot-middleware/client',
      path.join(__dirname, './src/index.js')
    ]
  },
  output: {
    // 文件输出路径
    path: path.resolve(__dirname, '../dist'),
    // 打包之后文件生成的名字
    filename: '[name].bundle.js',
    // filename: 'static/js/[name].bundle.js',
    // chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ]
}
