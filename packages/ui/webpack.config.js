const path = require('path');
const ECC = require('extract-css-chunks-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/**
 * Сюда необходимо прописать пакеты, из которых
 * потенциально будут импортироваться вложенные файлы, например:
 *
 * import { styled } from 'linaria/react';
 * import has from 'lodash/has';
 */
const externalModulesWithNestedImports = ['linaria'];

const externalModulesRegExp = new RegExp(
  `^(${externalModulesWithNestedImports.join('|')})`,
  'i'
);

const createConfig = (mode = 'development', withAnalyzer = false) => {
  const isDevelopment = mode === 'development';

  return {
    mode,
    context: __dirname, // to automatically find tsconfig.json
    devtool: isDevelopment ? 'source-map' : void 0,
    target: 'node',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `index.${mode}.js`,
      library: `exampleUI`,
      libraryTarget: 'commonjs2',
      publicPath: './',
    },
    resolve: {
      extensions: ['.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
            'linaria/loader',
            {
              loader: 'ts-loader',
              options: {
                compiler: 'ttypescript',
                // target: 'ES2020',
                // module: 'esnext',

                /**
                 * Disable type checker - we will use it in fork plugin
                 *
                 * @see https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
                 */
                transpileOnly: true,
              },
            },

            ...(isDevelopment ? ['react-docgen-typescript-loader'] : []),
          ],
        },
        {
          test: /\.css$/,
          use: [ECC.loader, 'css-loader'],
        },
        {
          test: /\.(svg|png|jpg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
            },
          },
        },
      ],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new ECC({
        filename: 'style.css',
      }),
      ...(withAnalyzer ? [new BundleAnalyzerPlugin()] : []),
    ],
    externals: [
      {
        react: 'commonjs2 react',
      },
      function(_context, request, callback) {
        if (externalModulesRegExp.test(request)) {
          return callback(null, `commonjs2 ${request}`);
        }
        callback();
      },
    ],
    watchOptions: {
      ignored: ['node_modules', 'dist', 'lib'],
    },
  };
};

const configs = {
  dev: createConfig(),
  prod: createConfig('production'),
};

module.exports = [configs.dev, configs.prod];
module.exports.createConfig = createConfig;
module.exports.configs = configs;
