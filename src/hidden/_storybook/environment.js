/* eslint-disable camelcase, max-len */
/* global require, __dirname, module */
/* eslint no-undef: "error" */

const path = require('path');
const { TwingEnvironment, TwingFunction, TwingLoaderChain, TwingLoaderFilesystem, TwingFilter } = require('twing');

const srcPath = path.resolve(__dirname, '../components');
const loader = new TwingLoaderFilesystem(srcPath);
const chain = new TwingLoaderChain([loader]);
const attachLibraryFn = new TwingFunction('attach_library', () => { });
const environment = new TwingEnvironment(chain, { autoescape: false, auto_reload: true });

// In storybook we get this returned as an instance of TwigLoaderNull
if (typeof loader.addPath === 'function') {
  // The loader expects aliases to be prefixed with a `@` sign.
  // To import a component, you would include it from `@src/components/../..`
  loader.addPath(srcPath, 'drupalx_theme');
}

environment.addFunction(attachLibraryFn);
environment.addFilter(new TwingFilter('t', function (string) {
  return string;
}));
module.exports = environment;
module.exports.chain = chain;
