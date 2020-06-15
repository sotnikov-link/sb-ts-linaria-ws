/**
 * @module
 * Конфигурация Webpack для webpack-bundle-analyzer
 */

const { createConfig } = require('./webpack.config');

module.exports = createConfig('development', true);
