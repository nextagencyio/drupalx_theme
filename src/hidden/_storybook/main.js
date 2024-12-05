// .storybook/main.js
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
    // Remove any existing CSS rules
    config.module.rules = config.module.rules.filter(
      (rule) => !rule.test || !rule.test.toString().includes('css')
    );

    // Add our custom CSS rule
    config.module.rules.push({
      test: /\.css$/,
      use: [
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
      ],
      include: path.resolve(__dirname, '../'),
    });

    // Rest of your webpack config...
    config.module.rules.push({
      test: /\.twig$/,
      use: {
        loader: 'twing-loader',
        options: {
          environmentModulePath: path.resolve(`${__dirname}/environment.js`),
        },
      },
    });

    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      })
    );

    return config;
  },
};
