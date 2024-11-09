import PopoverTemplate from './popover.twig';
import './popover.behavior.js';

export default {
  title: 'Messages/Popover'
};

export const Popover = PopoverTemplate.bind({});

Popover.play = async () => {
  Drupal.behaviors.popover.attach();
};

Popover.args = {};
