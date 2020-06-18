const path = require('path');
const addLinaria = require('./addLinaria');

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],

  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],

  webpackFinal: (config) => {
    /* Polyfills */
    config.entry.unshift(path.resolve(__dirname, 'polyfills'));

    /* Linaria */
    addLinaria(config);

    return config;
  },
};
