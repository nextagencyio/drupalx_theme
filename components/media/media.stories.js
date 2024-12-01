import MediaTemplate from './media.twig';

export default {
  title: 'Editorial/Media',
  argTypes: {
    media: {
      description: 'Define the media content, either an image or a video',
      control: 'text',
    },
    modifier: {
      description: 'CSS modifier classes for styling the media container',
      control: 'text',
    },
  },
};

const mockMedia = `
  <img
    src="./images/card.webp"
    alt="Example image"
    width="1280"
    height="720"
  />
`;

export const Default = MediaTemplate.bind({});
Default.args = {
  media: mockMedia,
  modifier: 'w-1/2',
};

export const Video = MediaTemplate.bind({});
Video.args = {
  media: `
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/I95hSyocMlg?si=Ytzqa9QSnFHvFNan"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  `,
  modifier: '',
};
