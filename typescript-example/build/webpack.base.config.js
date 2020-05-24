const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');

const outPath = path.resolve(__dirname, '../dist/');
const entries = {};
const nonWebpackedEntries = [];

function* getEntryPoint(step) {
  for (let suffix of ['.js', '.jsx', '.ts', '.tsx']) {
    const entryRequest = `./src/views/Javascript30/${step}/index${suffix}`;
    if (fs.existsSync(entryRequest)) {
      yield entryRequest;
    }
  }
  return false;
}

fs.readdirSync('./src/views/Javascript30').filter(step => {
  for (let entryPoint of getEntryPoint(step)) {
    entries[entryPoint.replace(/\/index.*/, '').replace(/^\.\//, '')] = entryPoint;
  }
});

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    ...entries
  },
  output: {
    filename: '[name]/bundle.js',
    path: outPath
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: [path.resolve(__dirname, 'node_modules')]
      }
    ]
  },
  plugins: [
    ...Object.keys(entries).map(entry => {
      return new HtmlWebpackPlugin({
        template: path.join(__dirname, `../${entry}`, 'index.html'),
        filename: `${entry}/index.html`,
        chunks: [entry]
      });
    }),
    new CopyWebpackPlugin({
      patterns: [
        ...Object.keys(entries).map(entry => {
          return {
            from: `${entry}/*.+(md|html)`,
            to: outPath
          };
        }),
        // {
        //   from: './src/assets/**/*',
        //   to: outPath
        // },
        {
          from: './src/index.html',
          to: outPath
        }
      ]
    }),
    new ForkTsCheckerWebpackPlugin()
  ]
};
