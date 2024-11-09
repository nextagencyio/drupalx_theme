import '../src/css/globals.css';

// import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
// ^ uncomment to include Storybook viewports

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // Opt-out of inline rendering
    inlineStories: false,
  },
  viewport: {
    viewports: {
      // ...MINIMAL_VIEWPORTS,
      // ^ uncomment to include Storybook viewports
    },
  },
};
export const tags = ['autodocs'];
