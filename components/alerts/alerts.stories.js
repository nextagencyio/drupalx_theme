import AlertsTemplate from './alerts.twig';

export default {
  title: 'Messages/Alerts'
};

export const Alerts = AlertsTemplate.bind({});
Alerts.args = {};
