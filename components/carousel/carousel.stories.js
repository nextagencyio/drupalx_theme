import CarouselTemplate from './carousel.twig';
import './carousel.behavior.js';

// Define mock media as separate constants
const mockMediaFirst = "<img src='./images/card.webp' class='d-block w-full' alt='First slide image' />";
const mockMediaSecond = "<img src='./images/card.webp' class='d-block w-full' alt='Second slide image' />";
const mockMediaThird = "<img src='./images/card.webp' class='d-block w-full' alt='Third slide image' />";

// Define mock items using the mock media
const mockItems = [
  {
    active: true,
    media: mockMediaFirst,
    title: 'First Slide',
    summary: 'This is the first slide',
  },
  {
    media: mockMediaSecond,
    title: 'Second Slide',
    summary: 'This is the second slide',
  },
  {
    media: mockMediaThird,
    title: 'Third Slide',
    summary: 'This is the third slide',
  },
];

export default {
  title: 'Editorial/Carousel',
  argTypes: {
    items: {
      description: 'Define the array of carousel items',
      control: 'object',
      type: {
        required: true,
      },
    },
    class: {
      description: 'Additional CSS classes for the carousel container',
      control: 'text',
      defaultValue: '',
    },
    item_class: {
      description: 'Additional CSS classes for each carousel item',
      control: 'text',
      defaultValue: '',
    },
  },
  play: async ({ canvasElement }) => {
    // Ensure that Drupal is available
    if (typeof Drupal !== 'undefined' && Drupal.behaviors && Drupal.behaviors.carouselBehavior) {
      // Attach the behavior to the rendered carousel
      Drupal.behaviors.carouselBehavior.attach(canvasElement, {});
    }
    else {
      console.warn('Drupal or carouselBehavior is not defined.');
    }
  },
};

export const Default = CarouselTemplate.bind({});

Default.args = {
  items: mockItems,
  class: 'max-w-4xl',
  item_class: '',
};
