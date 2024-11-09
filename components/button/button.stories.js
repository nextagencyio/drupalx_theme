import ButtonTemplate from './button.twig';

export default {
  title: 'General/Button',
  argTypes: {
    button: {
      name: 'Button object',
      description: 'Define the button content',
      control: 'object',
      type: {
        required: true
      }
    }
  }
};

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  button: {
    url: '#',
    text: 'Primary Button',
    icon: 'arrow_right_alt',
    modifier: 'btn-primary'
  },
  modifier: ''
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  button: {
    url: '#',
    text: 'Secondary Button',
    icon: 'arrow_right_alt',
    modifier: 'btn-secondary'
  }
};

export const PrimaryOutlined = ButtonTemplate.bind({});
PrimaryOutlined.args = {
  button: {
    url: '#',
    text: 'Primary Button',
    icon: '',
    modifier: 'btn-outline-primary'
  }
};

export const SecondaryOutlined = ButtonTemplate.bind({});
SecondaryOutlined.args = {
  button: {
    url: '#',
    text: 'Secondary Button',
    icon: '',
    modifier: 'btn-outline-secondary'
  }
};

export const PrimarySmall = ButtonTemplate.bind({});
PrimarySmall.args = {
  button: {
    url: '#',
    text: 'Primary Button Small',
    icon: '',
    modifier: 'btn-primary btn-sm'
  }
};

export const SecondarySmall = ButtonTemplate.bind({});
SecondarySmall.args = {
  button: {
    url: '#',
    text: 'Secondary Button Small',
    icon: '',
    modifier: 'btn-secondary btn-sm'
  }
};
