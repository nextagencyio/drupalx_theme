import CardTemplate from './card.twig';

export default {
  title: 'General/Single Card',
  argTypes: {
    heading: {
      name: 'Heading',
      description: 'Heading of the card',
      control: 'object'
    }
  }
};

export const SingleCard = CardTemplate.bind({});
SingleCard.args = {
  card: {
    modifier: 'col-6',
    body_modifier: '',
    media:
      "<img src='./images/card.webp' class='card-img-top' alt='test image' />",
    heading: {
      title: 'Phasellus auctor, turpis',
      heading_level: '2',
      url: '#',
      modifier: 'card-title mb-3'
    },
    layout: '',
    tags: ['New feature', 'Announcement'],
    summary_text:
      'This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.',
    link: {
      url: '#',
      text: 'Link 1'
    },
    link2: {
      url: '#',
      text: 'Link 2'
    }
  }
};

export const SingleCardNoTags = CardTemplate.bind({});
SingleCardNoTags.args = {
  card: {
    modifier: 'col-6',
    body_modifier: '',
    media:
      "<img src='./images/card.webp' class='card-img-top' alt='test image' />",
    heading: {
      title: 'Phasellus auctor, turpis',
      heading_level: '2',
      url: '#',
      modifier: 'card-title mb-3'
    },
    layout: '',
    summary_text:
      'This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.',
    link: {
      url: '#',
      text: 'Link 1'
    },
    link2: {
      url: '#',
      text: 'Link 2'
    }
  }
};
