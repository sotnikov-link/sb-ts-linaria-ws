// @ts-check
const { Compiler } = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

/**
 * Добавить поддержку Linaria в конфигурацию Webpack
 * @param {Compiler['options']} config
 */
const addLinaria = (config) => {
  for (let ruleIndex = 0; ruleIndex < config.module.rules.length; ruleIndex++) {
    const ruleItem = config.module.rules[ruleIndex];

    if (
      ruleItem.test instanceof RegExp &&
      ruleItem.test.toString().match('tsx')
    ) {
      ruleItem.use = (Array.isArray(ruleItem.use)
        ? ruleItem.use
        : [ruleItem.use]
      ).reduce((acc, useItem) => {
        /**
         * Условие при котором нужно добавить конфигурацию для Linaria
         */
        if (
          typeof useItem === 'object' &&
          typeof useItem.loader === 'string' &&
          useItem.loader.match('babel-loader')
        ) {
          acc.push({
            loader: 'linaria/loader',
            options: {
              sourceMap: isDevelopment,
            },
          });

          const options =
            typeof useItem.options === 'object' && useItem.options;

          acc.push({
            ...useItem,
            options: {
              ...options,
              presets: [
                ...(Array.isArray(options.presets) && options.presets),
                'linaria/babel',
              ],
            },
          });
        } else {
          acc.push(useItem);
        }

        return acc;
      }, []);
    }
  }
};

module.exports = addLinaria;
