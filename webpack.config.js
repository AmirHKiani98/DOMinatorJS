const path = require('path');

module.exports = {
  entry: './src/index.js',           // The entry point of your application
  output: {
    filename: 'bundle.js',           // The name of the output bundle
    path: path.resolve(__dirname, 'dist'),  // The directory where the output bundle will be placed
  },
  mode: 'development',               // Set mode to 'development' or 'production'
  watch: true,                       // Set to true to enable automatic recompilation on file change
};
