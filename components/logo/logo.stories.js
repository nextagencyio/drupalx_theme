import LogoTemplate from './logo.twig';

export default {
  title: 'General/Logo',
  argTypes: {
    modifier: {
      description: 'Define the modifier',
      control: 'text'
    },
    site_logo: {
      description: 'Define the site logo',
      control: 'text'
    }
  }
};

export const Logo = LogoTemplate.bind({});
Logo.args = {
  modifier: 'col-3',
  site_logo: './images/logo.svg'
};
