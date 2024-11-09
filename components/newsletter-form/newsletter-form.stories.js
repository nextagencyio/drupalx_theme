import NewsletterFormTemplate from './newsletter-form.twig';

export default {
  title: 'Editorial/Newsletter Form',
  argTypes: {
    modifier: {
      description: 'The modifier class to apply to the gallery lightbox component',
      control: 'text'
    }
  }
};

export const NewsletterForm = NewsletterFormTemplate.bind({});

NewsletterForm.args = {
  modifier: 'border p-4 rounded'
};
