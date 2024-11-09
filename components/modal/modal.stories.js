import ModalTemplate from './modal.twig';

export default {
  title: 'General/Modal',
  argTypes: {
    body: {
      description: 'Define the modal body text.',
      control: 'text'
    },
    close_text: {
      description: 'Define the modal close button text.',
      control: 'text'
    },
    button_text: {
      description: 'Define the modal button text.',
      control: 'text'
    },
    id: {
      description: 'Define the modal id.',
      control: 'text'
    },
    save_text: {
      description: 'Define the modal save button text.',
      control: 'text'
    },
    title: {
      description: 'Define the modal title.',
      control: 'text'
    },
    modifier: {
      description: 'Define the modal modifier class for button.',
      control: 'text'
    }
  }
};

export const Modal = ModalTemplate.bind({});

Modal.args = {
  id: 'exampleModal',
  title: 'Modal title',
  body: '<p>Modal body text goes here.</p>',
  button1: {
    text: 'Close'
  },
  button2: {
    text: 'Save Changes',
    url: 'http://drupal.org/'
  },
  trigger_button_text: 'Launch demo modal',
  modifier: 'btn-primary'
};
