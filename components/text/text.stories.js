import './text-block.scss';
import TextBlockTemplate from './text-block.twig';

export default {
  title: 'Editorial/Text Block',
  argTypes: {
    body_text: {
      description: 'Define the Text Block copy.',
      control: 'text'
    },
    heading: {
      description: 'Define the Text Block heading.',
      control: 'text'
    },
    modifier: {
      description: 'Define the Text Block modifier class.',
      control: 'text'
    }
  }
};

export const TextBlock = TextBlockTemplate.bind({});

TextBlock.args = {
  modifier: 'col-10 p-4',
  heading: {
    title: 'Title Lorem Ipsum Dolor',
    level: '2',
    modifier: 'mb-2 display-3'
  },
  body_text:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris mi, aliquam in orci at, finibus malesuada elit. Vivamus ex ante, imperdiet nec odio ac, sollicitudin fermentum velit. Nunc vestibulum massa est, eu auctor libero pellentesque eu. Cras id augue a lacus imperdiet convallis dictum vel diam. Fusce ut ex ac sem condimentum ornare. Nam at rutrum enim. Quisque convallis augue in nisi interdum, ac suscipit elit sollicitudin.</p><p>Nulla velit purus, varius quis velit aliquet, lobortis venenatis mauris. In non ligula eget ex semper pulvinar. Aliquam aliquet hendrerit auctor. Duis bibendum placerat risus, non commodo magna ornare id. Morbi eget nulla hendrerit, molestie nisl eget, semper odio. Mauris mollis risus sit amet ligula mattis vehicula. Donec maximus condimentum lacus, quis porttitor risus fermentum id. Duis semper neque in interdum pulvinar. Nam venenatis interdum libero. Proin dictum blandit ante sollicitudin laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas in pharetra ligula.</p>'
};
