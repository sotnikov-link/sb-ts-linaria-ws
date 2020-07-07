const path = require('path');
const tsNameof = require('ts-nameof');
const extendBabelLoader = require('./extendBabelLoader');

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],

  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          getCustomTransformers: () => ({
            before: [
              /** @see https://git.io/JJL3t */
              tsNameof,
            ],
          }),
        },
      },
    },
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],

  webpackFinal: (config) => {
    /* Polyfills */
    config.entry.unshift(path.resolve(__dirname, 'polyfills'));

    extendBabelLoader(config, {
      options: {
        plugins: [
          /** @see https://git.io/JJteO */
          'babel-plugin-ts-nameof',
        ],
      },
    });

    return config;
  },
};
