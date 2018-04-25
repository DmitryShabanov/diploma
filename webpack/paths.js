const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const sourceRoot = path.join(projectRoot, 'src');

module.exports = {
  entry: path.join(sourceRoot, 'index.jsx'),
  output: {
    path: path.join(projectRoot, 'docs'),
    filename: path.join('js', '[name].js'),
  },
  template: path.join(sourceRoot, 'index.html'),
  css: 'styles.css',
};
