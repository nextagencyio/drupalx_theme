/* .storybook/main.js */

/* global require, __dirname, module */
/* eslint no-undef: "error" */

const path = require('path');
const webpack = require('webpack');

module.exports = {
  stories: ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
    '@storybook/addon-themes',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  staticDirs: ['../static'],
  webpackFinal: async (config) => {
    // Add support for .twig files
    config.module.rules.push({
      test: /\.twig$/,
      use: {
        loader: 'twing-loader',
        options: {
          environmentModulePath: path.resolve(`${__dirname}/environment.js`),
        },
      },
    });

    // Add ProvidePlugin if needed
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      })
    );

    // Locate the existing CSS rule
    const cssRule = config.module.rules.find((rule) =>
      rule.test && rule.test.toString().includes('css')
    );

    if (cssRule) {
      // Replace existing loaders with style-loader, css-loader, and postcss-loader
      cssRule.use = [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              config: path.resolve(__dirname, '../postcss.config.js'),
            },
          },
        },
      ];
    }

    return config;
  },
  docs: {},
};
