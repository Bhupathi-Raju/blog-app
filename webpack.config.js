const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.join(__dirname, 'public'), // absolute path
        filename: 'bundle.js' // file name
      },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
      ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
      }
  };