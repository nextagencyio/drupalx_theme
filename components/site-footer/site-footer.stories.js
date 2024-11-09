import SiteFooterTemplate from './site-footer.twig';

export default {
  title: 'General/Site Footer',
  argTypes: {
    links: {
      description: 'Define the links',
      control: 'object'
    },
    site_logo: {
      description: 'Define the site logo',
      control: 'text'
    },
    modifier: {
      description: 'Define the modifier',
      control: 'text'
    },
    menu_modifier: {
      description: 'Define the menu modifier',
      control: 'text'
    }
  }
};

export const SiteFooter = SiteFooterTemplate.bind({});

SiteFooter.args = {
  site_logo: './images/logo.svg',
  modifier: '',
  link_item_modifier: 'fs-5 text-white',
  links: [
    {
      title: 'Privacy Policy',
      url: '#'
    },
    {
      title: 'Terms of Use',
      url: '#'
    },
    {
      title: 'Contact Us',
      url: '#'
    }
  ]
};
