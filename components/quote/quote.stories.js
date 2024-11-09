import QuoteTemplate from './quote.twig';

export default {
  title: 'Editorial/Quote',
  argTypes: {
    quote: {
      description: 'Define the quote object',
      control: 'object',
      type: {
        required: true
      }
    }
  }
};

export const Quote = QuoteTemplate.bind({});
Quote.args = {
  quote: {
    modifier_class: '',
    logo: "<img src='https://placehold.co/400x300/333333/FFF?text=Logo' class='img-fluid rounded-circle' alt='Logo' />",
    quote:
      'Quisque id odio. Sed a libero. Praesent ut ligula non mi varius sagittis. Curabitur nisi.',
    image:
      "<img src='https://placehold.co/400x300/333333/FFF?text=Headshot' class='img-fluid rounded-circle' alt='Headshot' />",
    name: 'Jane Doe',
    job: 'Donec interdum metus et hendrerit',
    layout: 'left'
  }
};
