/* global require, __dirname, module */
/* eslint no-undef: "error" */

const path = require('path');
const webpack = require('webpack');

module.exports = {
  'stories': ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-sass-postcss',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
    '@storybook/addon-themes',
    '@storybook/addon-mdx-gfm'
  ],
  'framework': {
    name: '@storybook/html-webpack5',
    options: {}
  },
  'staticDirs': ['../static'],
  'webpackFinal': async config => {
    config.module.rules.push({
      test: /\.twig$/,
      use: {
        loader: 'twing-loader',
        options: {
          environmentModulePath: path.resolve(`${__dirname}/environment.js`)
        }
      }
    });

    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      })
    );
    return config;
  },
  docs: {}
};
