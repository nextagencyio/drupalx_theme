import ModalTemplate from './modal.twig';
import './modal.behavior.js';

export default {
  title: 'General/Modal',
  argTypes: {
    button_text: {
      description: 'Text for the trigger button',
      control: 'text'
    },
    modal_name: {
      description: 'Unique identifier for the modal',
      control: 'text'
    },
    title: {
      description: 'Modal header title',
      control: 'text'
    },
    body: {
      description: 'Modal content body',
      control: 'text'
    },
    close_button: {
      description: 'Text for the close button',
      control: 'text'
    },
    save_button: {
      description: 'Configuration for the save button',
      control: 'object'
    }
  }
};

export const Default = ModalTemplate.bind({});

Default.args = {
  button_text: 'Launch demo modal',
  modal_name: 'exampleModal',
  title: 'Modal title',
  body: '<p>Modal body text goes here.</p>',
  close_button: 'Cancel',
  save_button: {
    text: 'Save Changes',
    url: 'http://drupal.org/'
  }
};

Default.play = async ({ canvasElement }) => {
  Drupal.behaviors.modal.attach(canvasElement);
};
