import buttonTemplate from './button.twig';

export default {
  title: 'General/Button',
  argTypes: {
    url: {
      description: 'The URL the button links to',
      control: 'text',
    },
    text: {
      description: 'The text inside the button',
      control: 'text',
    },
    icon: {
      description: 'The icon to display inside the button',
      control: 'text',
    },
    variant: {
      description: 'The button variant',
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      description: 'The button size',
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

const renderButton = (args) => {
  return buttonTemplate({
    url: args.url,
    text: args.text,
    icon: args.icon,
    variant: args.variant,
    size: args.size,
  });
};

export const Default = {
  render: renderButton,
  args: {
    url: '#',
    text: 'Default Button',
    icon: 'arrow-right',
    variant: 'default',
    size: 'default',
  },
};

export const Destructive = {
  render: renderButton,
  args: {
    url: '#',
    text: 'Destructive Button',
    variant: 'destructive',
  },
};

export const Outline = {
  render: renderButton,
  args: {
    url: '#',
    text: 'Outline Button',
    variant: 'outline',
  },
};

export const Secondary = {
  render: renderButton,
  args: {
    url: '#',
    text: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Ghost = {
  render: renderButton,
  args: {
    url: '#',
    text: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Link = {
  render: renderButton,
  args: {
    url: '#',
    text: 'Link Button',
    variant: 'link',
  },
};

export const Small = {
  render: renderButton,
  args: {
    url: '#',
    text: 'Small Button',
    size: 'sm',
  },
};

export const Large = {
  render: renderButton,
  args: {
    url: '#',
    text: 'Large Button',
    size: 'lg',
  },
};

export const IconButton = {
  render: renderButton,
  args: {
    url: '#',
    text: '',
    icon: 'arrow-right',
    size: 'icon',
  },
};
