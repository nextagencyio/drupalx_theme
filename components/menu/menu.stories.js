import MenuTemplate from './menu.twig';

export default {
  title: 'Navigation/Menu',
  argTypes: {
    menu_items: {
      description: 'Define the links',
      control: 'array'
    },
    attibutes: {
      description: 'Define the attibutes',
      control: 'object'
    },
    modifier: {
      description: 'Define the modifier',
      control: 'text'
    },
    item_modifier: {
      description: 'Define the list item modifier',
      control: 'text'
    }
  }
};

export const Menu = MenuTemplate.bind({});

Menu.args = {
  menu_items: [
    {
      url: '#',
      title: 'Link 1'
    },
    {
      url: '#',
      title: 'Link 2'
    },
    {
      url: '#',
      title: 'Link 3'
    }
  ],
  modifier: '',
  item_modifier: ''
};
