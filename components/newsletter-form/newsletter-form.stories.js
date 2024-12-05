import NewsletterFormTemplate from './newsletter-form.twig';

export default {
  title: 'Editorial/Newsletter',
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the newsletter',
    },
    summary: {
      control: 'text',
      description: 'Summary text of the newsletter',
    },
    modifier: {
      control: 'text',
      description: 'Modifier class for the newsletter container',
    },
  },
};

export const NewsletterForm = NewsletterFormTemplate.bind({});

NewsletterForm.args = {
  title: 'Sign up for our newsletter',
  summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  modifier: 'container mx-auto px-8',
};
