import HeadingTemplate from './heading.twig';

export default {
  title: 'General/Heading'
};

export const Heading = HeadingTemplate.bind({});
Heading.args = {
  heading: {
    title: 'Title Lorem Ipsum Dolor',
    level: '2',
    modifier: 'display-3'
  }
};
