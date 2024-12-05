import TextBlockTemplate from './text.twig';

export default {
  title: 'Editorial/Text Block',
  argTypes: {
    eyebrow: {
      control: 'text',
      description: 'Optional eyebrow text displayed above the title'
    },
    title: {
      control: 'text',
      description: 'Main title of the text block'
    },
    heading: {
      control: 'object',
      description: 'Optional heading object that overrides the title'
    },
    body: {
      control: 'text',
      description: 'Main content of the text block'
    },
    link: {
      control: 'object',
      description: 'Primary button/link configuration'
    },
    link2: {
      control: 'object',
      description: 'Secondary button/link configuration'
    },
    text_layout: {
      control: 'select',
      options: ['left', 'centered', 'buttons-right'],
      description: 'Layout configuration for the text block'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the container'
    }
  }
};

export const Default = TextBlockTemplate.bind({});
Default.args = {
  eyebrow: 'Test eyebrow',
  title: 'Title Lorem Ipsum Dolor',
  body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris mi, aliquam in orci at, finibus malesuada elit. Vivamus ex ante, imperdiet nec odio ac, sollicitudin fermentum velit.</p>',
  link: {
    url: '#',
    text: 'Read more'
  },
  link2: {
    url: '#',
    text: 'Learn more'
  },
  text_layout: 'left',
  className: ''
};

export const Centered = TextBlockTemplate.bind({});
Centered.args = {
  ...Default.args,
  text_layout: 'centered'
};

export const ButtonsRight = TextBlockTemplate.bind({});
ButtonsRight.args = {
  ...Default.args,
  text_layout: 'buttons-right'
};

export const NoLinks = TextBlockTemplate.bind({});
NoLinks.args = {
  ...Default.args,
  link: undefined,
  link2: undefined
};

export const SingleLink = TextBlockTemplate.bind({});
SingleLink.args = {
  ...Default.args,
  link2: undefined
};
