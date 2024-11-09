import MediaTemplate from './media.twig';

export default {
  title: 'Editorial/Media',
  argTypes: {
    media: {
      description: 'Define the media item',
      control: 'text',
      type: {
        required: true
      }
    }
  }
};

export const Media = MediaTemplate.bind({});

Media.args = {
  media:
    "<img src='./images/card.webp' class='img-fluid rounded' alt='test image' />"
};
