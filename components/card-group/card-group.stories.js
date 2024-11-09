import CardGroupTemplate from './card-group.twig';

export default {
  title: 'Editorial/Card Group',
  argTypes: {
    section_title: {
      description: 'The title of the card list component',
      control: 'text'
    },
    card_items: {
      description: 'Array of the card list item content',
      control: 'object',
      type: {
        required: true
      }
    }
  }
};

export const CardGroup = CardGroupTemplate.bind({});

CardGroup.args = {
  section_title: 'Latest Articles',
  card_items: [
    {
      card: {
        modifier: '',
        media:
          "<img src='./images/card.webp' class='card-img-top' alt='test image' />",
        heading: {
          title: 'Phasellus auctor, turpis',
          heading_level: '2',
          url: '#',
          modifier: 'card-title mb-4'
        },
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
    },
    {
      card: {
        modifier: '',
        media:
          "<img src='./images/card.webp' class='card-img-top' alt='test image' />",
        heading: {
          title: 'Phasellus auctor, turpis',
          heading_level: '2',
          url: '#',
          modifier: 'card-title mb-4'
        },
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
    },
    {
      card: {
        modifier: '',
        media:
          "<img src='./images/card.webp' class='card-img-top' alt='test image' />",
        heading: {
          title: 'Phasellus auctor, turpis',
          heading_level: '2',
          url: '#',
          modifier: 'card-title mb-4'
        },
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
    },
    {
      card: {
        modifier: '',
        media:
          "<img src='./images/card.webp' class='card-img-top' alt='test image' />",
        heading: {
          title: 'Phasellus auctor, turpis',
          heading_level: '2',
          url: '#',
          modifier: 'card-title mb-4'
        },
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
    },
    {
      card: {
        modifier: '',
        media:
          "<img src='./images/card.webp' class='card-img-top' alt='test image' />",
        heading: {
          title: 'Phasellus auctor, turpis',
          heading_level: '2',
          url: '#',
          modifier: 'card-title mb-4'
        },
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
    },
    {
      card: {
        modifier: '',
        media:
          "<img src='./images/card.webp' class='card-img-top' alt='test image' />",
        heading: {
          title: 'Phasellus auctor, turpis',
          heading_level: '2',
          url: '#',
          modifier: 'card-title mb-4'
        },
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
    }
  ]
};

export const CardGroupStats = CardGroupTemplate.bind({});

CardGroupStats.args = {
  section_title: 'Top Stats',
  card_items: [
    {
      media:
        '<span class="material-symbols-outlined display-1">monitoring</span>',
      heading: 'This is small headling',
      body: 'Vestibulum fringilla pede sit amet augue. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.',
      modifier: ''
    },
    {
      media:
        '<span class="material-symbols-outlined display-1">bar_chart_4_bars</span>',
      heading: 'This is small headling',
      body: 'Vestibulum fringilla pede sit amet augue. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.',
      modifier: ''
    },
    {
      media:
        '<span class="material-symbols-outlined display-1">grouped_bar_chart</span>',
      heading: 'This is small headling',
      body: 'Vestibulum fringilla pede sit amet augue. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.',
      modifier: ''
    }
  ]
};
