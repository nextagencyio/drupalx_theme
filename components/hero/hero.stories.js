// Hero.stories.js

import heroTemplate from './hero.twig';
import './hero.css';

export default {
  title: 'Editorial/Hero',
  component: heroTemplate,
  argTypes: {
    modifier: { control: 'text' },
    media: { control: 'text' },
    heading: { control: 'text' },
    summary: { control: 'text' },
    hero_layout: {
      control: 'select',
      options: ['image_top', 'image_bottom', 'image_bottom_split'],
      name: 'layout',
      description: 'Select the layout variant for the Hero component.',
    },
    link: {
      control: 'object',
      description: 'Primary action link',
      defaultValue: { url: '#', title: 'Learn More', icon: 'arrow_right_alt' },
    },
    link2: {
      control: 'object',
      description: 'Secondary action link',
      defaultValue: { url: '#', title: 'Get Started', icon: 'arrow_right_alt' },
    },
  },
};

const Template = (args) => heroTemplate(args);

const mockMedia = `
  <img src="./images/card.webp" alt="Example image" class="d-block w-full" width="1280" height="720" />
`;

export const Default = Template.bind({});
Default.args = {
  modifier: 'max-w-4xl',
  media: mockMedia,
  heading: 'Welcome to <strong>Our Website</strong>',
  summary:
    'This is a brief summary of our amazing content. It can include <em>formatted text</em> as well.',
  hero_layout: 'image_top',
  link: {
    url: 'https://example.com',
    title: 'Learn More',
    icon: 'arrow_right_alt',
  },
  link2: {
    url: 'https://example.com',
    title: 'Get Started',
    icon: 'arrow_right_alt',
  },
};

export const ImageBottom = Template.bind({});
ImageBottom.args = {
  ...Default.args,
  hero_layout: 'image_bottom',
};

export const ImageBottomSplit = Template.bind({});
ImageBottomSplit.args = {
  ...Default.args,
  hero_layout: 'image_bottom_split',
  heading: 'Empower Your Content with DrupalX Today',
  summary:
    'Discover the power of a decoupled CMS that adapts to your needs. With DrupalX, you can create, manage, and scale your content effortlessly.',
};
