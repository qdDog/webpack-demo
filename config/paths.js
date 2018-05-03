'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

// 项目根目录
const appDirectory = fs.realpathSync(process.cwd());

// 获取指定目录
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appSrc: resolveApp('src'),
  appBuild: resolveApp('dist'),
  appHtml: resolveApp('src/index.html'),
  appIndex: resolveApp('src/index.js')
}
