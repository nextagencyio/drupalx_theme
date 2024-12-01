import MainMenuTemplate from './main-menu.twig';

const meta = {
  title: 'Navigation/Main Navigation',
  argTypes: {
    modifier: {
      description: 'Define the modifier class for the main menu',
      control: 'text',
    },
    link_modifier: {
      description: 'Define the modifier class for the main menu links',
      control: 'text',
    },
    show_logo: {
      description: 'Show the site logo',
      control: 'boolean',
    },
    site_logo: {
      description: 'Define the path to the site logo',
      control: 'text',
    },
    site_logo_width: {
      description: 'Define the width of the site logo',
      control: { type: 'number' },
    },
    site_logo_height: {
      description: 'Define the height of the site logo',
      control: { type: 'number' },
    },
    site_name: {
      description: 'Define the site name to display',
      control: 'text',
    },
    show_site_name: {
      description: 'Show the site name',
      control: 'boolean',
    },
    cta_link_count: {
      description: 'Number of links to display as Call To Action (CTA) links',
      control: { type: 'number' },
    },
    items: {
      description: 'Define the array of main menu items',
      control: 'object',
    },
  }
};

export default meta;

export const MainNavigation = {
  render: (args) => MainMenuTemplate(args),
  args: {
    modifier: '',
    link_modifier: 'text-dark',
    show_logo: true,
    site_logo: './images/logo.svg',
    site_logo_width: 200,
    site_logo_height: 100,
    site_name: 'Site Name',
    show_site_name: false,
    cta_link_count: 2,
    items: [
      {
        title: 'Home',
        url: '#',
        in_active_trail: true
      },
      {
        title: 'Menu Item 1',
        url: '#',
        is_expanded: true,
        below: [
          {
            title: 'Vestibulum ac diam',
            url: '#'
          },
          {
            title: 'Mauris blandit aliquet',
            url: '#'
          },
          {
            title: 'Pellentesque in',
            url: '#'
          }
        ]
      },
      {
        title: 'Menu Item 2',
        url: '#',
        is_expanded: true,
        below: [
          {
            title: 'Vestibulum ac diam',
            url: '#'
          },
          {
            title: 'Mauris blandit aliquet',
            url: '#'
          }
        ]
      },
      {
        title: 'Menu Item 3',
        url: '#'
      },
      {
        title: 'CTA 1',
        url: '#'
      },
      {
        title: 'CTA 2',
        url: '#'
      }
    ]
  }
};
