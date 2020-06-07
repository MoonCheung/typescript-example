const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    hot: false, // 开启热更新
    stats: 'errors-only',
    inline: true
  }
};
