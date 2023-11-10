const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/app.js',
  target: 'node',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
};
