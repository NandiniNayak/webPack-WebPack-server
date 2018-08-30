// node js run time environment uses path module to generate absolute path
const path = require('path');
// plugin added to extract css files imported in js and create a separte css file instead of merging into bundle.js
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
  // entry point property(index.js -> sum.js)
  entry: './src/index.js',
  // output property is an object with further nested property,
  // path (ref to directory where bundle.js has to be stored into: absolut file reference) and file name : output file
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      // {
      //   use: 'babel-loader',
      //   // caputures only the files with file extension.js, hence ensuring babel is applied only on JS and not on any css
      //   test: /\.js$/
      // }
      // order matters: right to left, first the css-loader will be applied and the output will pass through style-loader
      {
        // use: ['style-loader', 'css-loader'],
        // anyfile ending with .css will be passed through these loaders

        // property to create separate extract file for css, and keep the css code out of bundle.js
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      // rule for extracting images stored locally
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        // order matters
        use: [
          {
            loader: 'url-loader',
            // look for any image that is greater than 40000 bytes long save as seperate file or add to bundle.js
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
