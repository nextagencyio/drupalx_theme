import BadgeTemplate from './badge.twig';

export default {
  title: 'General/Badge',
  argTypes: {
    tag: {
      description: 'Define the badge content',
      control: 'text',
      type: {
        required: true
      }
    },
    modifier: {
      description: 'Define the badge modifier',
      control: 'text',
      type: {
        required: false
      }
    }
  }
};

export const Badge = BadgeTemplate.bind({});
Badge.args = {
  tag: 'New feature',
  modifier: 'text-bg-primary'
};
