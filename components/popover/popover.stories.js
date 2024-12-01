import PopoverTemplate from './popover.twig';
import './popover.behavior.js';

export default {
  title: 'Messages/Popover',
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text for the popover',
      defaultValue: 'Popover title',
    },
    content: {
      control: 'text',
      description: 'Content text for the popover',
      defaultValue: 'And here\'s some amazing content. It\'s very engaging. Right?',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the popover relative to the trigger',
      defaultValue: 'bottom',
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover'],
      description: 'Trigger action for the popover',
      defaultValue: 'click',
    },
    buttonVariant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Visual style of the trigger button',
      defaultValue: 'destructive',
    },
    buttonText: {
      control: 'text',
      description: 'Text displayed on the trigger button',
      defaultValue: 'Click to toggle popover',
    },
    className: {
      control: 'text',
      description: 'Additional classes for the popover content',
      defaultValue: 'w-80',
    }
  }
};

export const Default = PopoverTemplate.bind({});

Default.args = {
  title: 'Popover title',
  content: 'And here\'s some amazing content. It\'s very engaging. Right?',
  placement: 'bottom',
  trigger: 'click',
  buttonVariant: 'destructive',
  buttonText: 'Click to toggle popover',
  className: 'w-80',
  buttonAttributes: {}
};

Default.play = async ({ canvasElement }) => {
  Drupal.behaviors.popover.attach(canvasElement);
};
