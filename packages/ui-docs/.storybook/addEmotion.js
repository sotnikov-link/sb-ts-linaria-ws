// @ts-check
const { Compiler } = require('webpack');
const merge = require('lodash.merge');

const isDevelopment = process.env.NODE_ENV !== 'production';

/**
 * Добавить поддержку emotion в конфигурацию Webpack
 * @param {Compiler['options']} config
 */
const addEmotion = (config) => {
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
         * Условие при котором нужно добавить конфигурацию для emotion
         */
        if (
          typeof useItem === 'object' &&
          typeof useItem.loader === 'string' &&
          useItem.loader.match('babel-loader')
        ) {
          acc.push(
            merge(
              {
                options: {
                  plugins: [['emotion', { sourceMap: isDevelopment }]],
                },
              },
              useItem
            )
          );
        } else {
          acc.push(useItem);
        }

        return acc;
      }, []);
    }
  }
};

module.exports = addEmotion;
