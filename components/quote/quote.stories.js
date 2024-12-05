import QuoteTemplate from './quote.twig';

export default {
  title: 'Editorial/Quote',
  argTypes: {
    author: {
      description: 'Author of the quote',
      control: 'text',
    },
    jobTitle: {
      description: 'Job title of the author',
      control: 'text',
    },
    logo: {
      description: 'Logo component',
      control: 'text',
    },
    quote: {
      description: 'The quote text',
      control: 'text',
    },
    thumb: {
      description: 'Thumbnail image for the author',
      control: 'text',
    },
  },
};

export const Default = QuoteTemplate.bind({});
Default.args = {
  author: 'Author Name',
  job_title: 'Job Title',
  logo: "<img src='./images/card.webp' class='img-fluid' alt='Logo' />",
  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris mi, aliquam',
  thumb: "<img src='./images/card.webp' alt='Thumb' />",
};
