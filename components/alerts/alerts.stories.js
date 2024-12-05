import AlertsTemplate from './alerts.twig';

export default {
  title: 'Messages/Alerts',
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'destructive'],
    },
    title: { control: 'text' },
    onDismiss: { action: 'dismissed' },
  },
};

export const Alerts = AlertsTemplate.bind({});

Alerts.args = {
  type: 'default',
  children: 'This is a default alert.',
};

export const Destructive = AlertsTemplate.bind({});
Destructive.args = {
  type: 'destructive',
  children: 'This is a destructive alert.',
};

export const WithTitle = AlertsTemplate.bind({});
WithTitle.args = {
  type: 'default',
  title: 'Alert Title',
  children: 'This is an alert with a title.',
};

export const Dismissible = AlertsTemplate.bind({});
Dismissible.args = {
  type: 'default',
  children: 'This is a dismissible alert.',
  on_dismiss: () => console.log('Alert dismissed'),
};

export const LongContent = AlertsTemplate.bind({});
LongContent.args = {
  type: 'default',
  title: 'Long Content Alert',
  children: 'This alert has a longer content to demonstrate how the component handles multiple lines of text. It should wrap properly and maintain good readability.',
};

export const DestructiveWithTitle = AlertsTemplate.bind({});
DestructiveWithTitle.args = {
  type: 'destructive',
  title: 'Warning',
  children: 'This is a destructive alert with a title.',
};
