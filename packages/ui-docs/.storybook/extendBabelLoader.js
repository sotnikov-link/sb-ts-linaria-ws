// @ts-check
const { Compiler } = require('webpack');
const merge = require('deepmerge');

/**
 * Расширить babel-loader в конфигурации Webpack. Функция мутирует переданную
 * в неё конфигурацию Webpack.
 * @param {Compiler['options']} config
 * @param {object} extension
 */
const extendBabelLoader = (config, extension) => {
  for (let ruleIndex = 0; ruleIndex < config.module.rules.length; ruleIndex++) {
    const ruleItem = config.module.rules[ruleIndex];
    const ruleItemTest =
      ruleItem.test instanceof RegExp && ruleItem.test.toString();

    if (
      ruleItemTest &&
      (ruleItemTest.match('tsx') || ruleItemTest.match('mdx'))
    ) {
      ruleItem.use = (Array.isArray(ruleItem.use)
        ? ruleItem.use
        : [ruleItem.use]
      ).reduce((acc, useItem) => {
        /**
         * Условие при котором нужно добавить расширение в babel-loader
         */
        if (
          typeof useItem === 'object' &&
          typeof useItem.loader === 'string' &&
          useItem.loader.match('babel-loader')
        ) {
          acc.push(merge(extension, useItem));
        } else {
          acc.push(useItem);
        }

        return acc;
      }, []);
    }
  }

  return config;
};

module.exports = extendBabelLoader;
