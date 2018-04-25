const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use(
  webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath: config.output.publicPath
  })
)

app.use(
  WebpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr'
  })
)

app.listen(3000, function() {
  console.log('app running at port: 3000!')
})
