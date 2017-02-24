const path = require('path');
const fetch = require('whatwg-fetch');


module.exports = {
  entry: ['whatwg-fetch', path.resolve(__dirname, 'src') + '/index.jsx'],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx?)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx?)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        query: { mimetype: 'image/png' },
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  eslint: {
    failOnWarning: false,
    failOnError: false
  },
};
