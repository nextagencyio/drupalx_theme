import shadowTemplate from './shadow.twig';

export default {
  title: 'General/Shadow',
  argTypes: {
    variant: {
      control: 'select',
      options: ['sm', 'regular', 'lg'],
      defaultValue: 'regular'
    },
    background: {
      control: 'text',
      defaultValue: 'bg-background'
    },
    additional_classes: {
      control: 'text',
      defaultValue: ''
    }
  }
};

const Template = (args) => shadowTemplate(args);

export const Default = Template.bind({});
Default.args = {
  variant: 'sm'
};

export const RegularShadow = Template.bind({});
RegularShadow.args = {
  variant: 'regular'
};

export const LargeShadow = Template.bind({});
LargeShadow.args = {
  variant: 'lg'
};
