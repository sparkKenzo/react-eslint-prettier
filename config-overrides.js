const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

const resolve = dir => path.join(__dirname, '.', dir);

module.exports = override(
  // antd的按需引入
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    '@': resolve('src'),
  })
);
