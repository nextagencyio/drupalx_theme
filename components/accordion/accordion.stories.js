import AccordionTemplate from './accordion.twig';
import './accordion.behavior.js';

export default {
  title: 'Editorial/Accordion',
  argTypes: {
    title: {
      control: 'text',
      description: 'Title for the accordion group',
    },
    modifier: {
      control: 'text',
      description: 'Modifier class for the accordion group'
    },
    accordion_items: {
      description:
        'Define the list of items containing the title and content of each accordion',
      control: 'object',
      type: {
        required: true
      }
    }
  }
};

export const Default = AccordionTemplate.bind({});

Default.args = {
  title: 'Accordion Group Title',
  modifier: '',
  accordion_items: [
    {
      heading: 'Curabitur aliquet quam id dui posuere blandit.',
      body:
        '<p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>',
      accordion_instance: '1',
      link: {
        url: 'https://www.google.com',
        title: 'Learn more',
      }
    },
    {
      heading: 'Curabitur aliquet quam',
      body:
        '<p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>',
      accordion_instance: '2',
      link: {
        url: 'https://www.google.com',
        title: 'Learn more',
      }
    },
    {
      heading:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      body:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est sit amet facilisis magna etiam tempor orci. Auctor eu augue ut lectus arcu bibendum at varius. Risus ultricies tristique nulla aliquet enim tortor at auctor.</p>',
      accordion_instance: '3',
      link: {
        url: 'https://www.google.com',
        title: 'Learn more',
      }
    }
  ]
};

Default.play = async () => {
  Drupal.behaviors.accordionBehavior.attach(document);
};
