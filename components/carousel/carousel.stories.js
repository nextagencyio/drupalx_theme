import CarouselTemplate from './carousel.twig';

export default {
  title: 'Editorial/Carousel',
  argTypes: {
    list: {
      description: 'Define the array of carousel items',
      control: 'object',
      type: {
        required: true
      }
    }
  }
};

export const Carousel = CarouselTemplate.bind({});

Carousel.args = {
  id: 'single',
  list: [
    {
      active: true,
      image:
        "<img src='https://placehold.co/600x300/333333/FFF?text=First slide' class='d-block w-100' alt='test image' />",
      title: 'First slide label',
      caption: 'First slide caption'
    },
    {
      image:
        "<img src='https://placehold.co/600x300/333333/FFF?text=Second slide' class='d-block w-100' alt='test image' />",
      title: 'Second slide label',
      caption: 'Second slide caption'
    },
    {
      image:
        "<img src='https://placehold.co/600x300/333333/FFF?text=Third slide' class='d-block w-100' alt='test image' />",
      title: 'Third slide label',
      caption: 'Third slide caption'
    }
  ]
};
