import ImageTemplate from './image.twig';

export default {
  title: 'General/Image',
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' }
  }
};

export const Default = ImageTemplate.bind({});
Default.args = {
  src: './images/card.webp',
  alt: 'Image alt text'
};
