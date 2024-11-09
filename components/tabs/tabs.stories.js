import TabsTemplate from './tabs.twig';

export default {
  title: 'Navigation/Tabs',
  argTypes: {
    tab_items: { control: 'object' }
  }
};

export const Tabs = TabsTemplate.bind({});
Tabs.args = {
  tab_items: [
    {
      title: 'Active',
      url: '#',
      active: true
    },
    {
      title: 'Link',
      url: '#'
    },
    {
      title: 'Link',
      url: '#'
    },
    {
      title: 'Disabled',
      disabled: true
    }
  ]
};
