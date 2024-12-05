import pagerTemplate from './pager.twig';

export default {
  title: 'Navigation/Pager',
  argTypes: {
    heading_id: {
      description: 'Define the heading id attribute',
      control: 'text'
    },
    current: {
      description: 'Current page number (1-based index)',
      control: 'number',
      defaultValue: 1
    },
    items: {
      description: 'Define the pager items',
      control: 'object',
      type: { required: true }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Pagination component for navigating through multiple pages of content. Supports previous/next navigation and page numbers with responsive design.'
      }
    }
  }
};

// Default Pager with all features
export const Default = (args) => pagerTemplate(args);

const pages = Array.from({ length: 13 }, (_, i) => ({
  href: `?search=&page=${i + 1}`
}));

Default.args = {
  heading_id: 'styleguide_instance--1',
  current: 0,
  items: {
    previous: {
      href: '?search=&page=1',
      text: 'Previous'
    },
    pages: pages,
    next: {
      href: '?search=&page=3',
      text: 'Next'
    }
  }
};
