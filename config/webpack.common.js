const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const paths =  require('./paths')

module.exports = {
  entry: {
    app: [
      // 'webpack-hot-middleware/client',
      paths.appIndex
    ]
  },
  output: {
    // 文件输出路径
    path: paths.appBuild,
    // 打包之后文件生成的名字
    // filename: '[name].bundle.js',
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    // filename: 'static/js/[name].bundle.js',
    // chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/'
  },
  plugins: [

  ]
}
