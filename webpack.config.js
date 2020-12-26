const path = require('path')

module.exports = {
  // 模式
  mode: 'development', // 开发的模式
  // mode: 'production', // 生产的模式
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'ys_Utils.js',
    // filename: 'ys_Utils.min.js',
    library: 'aUtils',
    libraryTarget: 'umd', // 针对 esm / conmonjs
  },
}
