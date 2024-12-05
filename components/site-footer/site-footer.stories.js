import SiteFooterTemplate from './site-footer.twig';

export default {
  title: 'General/Site Footer',
  component: SiteFooterTemplate,
  argTypes: {
    links: {
      description: 'Define the footer navigation links',
      control: 'object',
    },
    site_logo: {
      description: 'URL path to the site logo',
      control: 'text',
    },
    site_logo_width: {
      description: 'Width of the site logo in pixels',
      control: 'number',
      defaultValue: 200,
    },
    site_logo_height: {
      description: 'Height of the site logo in pixels',
      control: 'number',
      defaultValue: 34,
    },
    site_name: {
      description: 'Name of the site',
      control: 'text',
      defaultValue: 'DrupalX',
    },
    show_logo: {
      description: 'Whether to display the site logo',
      control: 'boolean',
      defaultValue: true,
    },
    current_year: {
      description: 'Current year to display in copyright',
      control: 'number',
      defaultValue: new Date().getFullYear(),
    }
  },
};

export const Default = {
  args: {
    site_logo: '/images/logo.svg',
    site_logo_width: 200,
    site_logo_height: 34,
    site_name: 'DrupalX',
    show_logo: true,
    links: [
      {
        title: 'Privacy Policy',
        url: '#',
        children: [
          {
            title: 'Sub-link',
            url: '#',
          }
        ],
      },
      {
        title: 'Terms of Use',
        url: '#',
        children: [
          {
            title: 'Sub-link',
            url: '#',
          }
        ],
      },
      {
        title: 'Contact Us',
        url: '#',
        children: [
          {
            title: 'Sub-link',
            url: '#',
          }
        ],
      },
    ],
  },
};
