const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],

  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],

  webpackFinal: (config) => {
    /**
     * Добавляем polyfills в сборку
     */
    config.entry.unshift(path.resolve(__dirname, 'polyfills'));

    return config;
  },
};
