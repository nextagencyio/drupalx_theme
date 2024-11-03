import './side-by-side.scss';
import SideBySideTemplate from './side-by-side.twig';

export default {
  title: 'Editorial/Side-by-Side',
  argTypes: {
    eyebrow: {
      name: 'Eyebrow Text',
      description: 'Eyebrow displays above main title.',
      control: 'text'
    },
    title: {
      name: 'Title',
      description: 'Side-by-Side title',
      control: 'text'
    },
    media: {
      name: 'Media',
      description: 'Side-by-Side image or video markup',
      control: 'text'
    },
    body: {
      name: 'Body Text',
      description: 'Side-by-Side body text',
      control: 'text'
    },
    button: {
      name: 'Button',
      description: 'Call to action.',
      control: 'object'
    },
    layout: {
      name: 'Layout',
      description: 'Controls image left/right placement.',
      control: 'select',
      options: {
        'Pin image left': 'left',
        'Pin image right': 'right'
      }
    },
    modifier: {
      name: 'Modifier',
      description: 'Additional classes for the component.',
      control: 'text'
    }
  }
};

export const Left = SideBySideTemplate.bind({});
Left.args = {
  title: 'Lorem ipsum dolor sit amet, elit.',
  eyebrow: 'Eyebrow',
  media:
    "<img src='./images/card.webp' class='img-fluid rounded' alt='test image' />",
  body: 'Contra legem facit qui id facit quod lex prohibet. Nec dubitamus multa iter quae et nos invenerat. Praeterea iter est quasdam res quas ex communi. Lorem ipsum dolor sit amet, consectetur adipisici elit.',
  button: {
    url: '#',
    text: 'Call to action',
    icon: 'arrow_right_alt',
    modifier: 'btn-primary has-icon'
  },
  layout: 'left',
  modifier: ''
};

export const Right = SideBySideTemplate.bind({});
Right.args = {
  title: 'Lorem ipsum dolor sit amet, elit.',
  eyebrow: 'Eyebrow',
  media:
    "<img src='./images/card.webp' class='img-fluid rounded' alt='test image' />",
  body: 'Contra legem facit qui id facit quod lex prohibet. Nec dubitamus multa iter quae et nos invenerat. Praeterea iter est quasdam res quas ex communi. Lorem ipsum dolor sit amet, consectetur adipisici elit.',
  button: {
    url: '#',
    text: 'Call to action',
    icon: 'arrow_right_alt',
    modifier: 'btn-primary has-icon'
  },
  layout: 'right'
};
