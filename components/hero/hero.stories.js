import HeroTemplate from './hero.twig';

export default {
  title: 'Editorial/Hero',
  argTypes: {
    modifier: { control: 'text' },
    media: { control: 'text' },
    title: { control: 'text' },
    body_text: { control: 'text' },
    layout: {
      control: 'radio',
      options: ['image_top', 'image_bottom']
    },
    button: {
      control: {
        type: 'object',
        name: 'button',
        args: {
          url: { control: 'text' },
          text: { control: 'text' },
          icon: { control: 'text' }
        }
      }
    },
    button2: {
      control: {
        type: 'object',
        name: 'button',
        args: {
          url: { control: 'text' },
          text: { control: 'text' },
          icon: { control: 'text' }
        }
      }
    }
  }
};

export const Hero = HeroTemplate.bind({});
Hero.args = {
  modifier: '',
  media:
    "<img src='./images/hero.png' class='img-fluid rounded' alt='test image' />",
  title: 'Phasellus <strong>auctor</strong>, turpis',
  body_text:
    'This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.',
  layout: 'image_top',
  button: {
    url: '#',
    text: 'Link 1',
    icon: 'arrow_right_alt'
  },
  button2: {
    url: '#',
    text: 'Link 2',
    icon: 'arrow_right_alt'
  }
};
