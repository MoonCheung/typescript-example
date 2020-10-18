const path = require('path');

module.exports = () => ({
  // 基本路径
  // publicPath: './',
  // 输出文件目录
  // outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 键值对象时会合并配置，为方法时会改写配置
  configureWebpack: config => {},
  // webpack链式操作
  chainWebpack: config => {
    config.resolve.alias.set('@', path.join(__dirname, 'src'));
  }
});
