import './stat.scss';
import StatTemplate from './stat.twig';

export default {
  title: 'General/Stat',
  argTypes: {
    heading: {
      description: 'Stat heading',
      control: 'text'
    },
    body: {
      description: 'Stat text',
      control: 'text'
    },
    media: {
      description: 'Stat media',
      control: 'text'
    },
    modifier: {
      description: 'Stat modifier',
      control: 'text'
    }
  }
};

export const Stat = StatTemplate.bind({});
Stat.args = {
  media: '<span class="material-symbols-outlined display-1">monitoring</span>',
  heading: 'This is small headling',
  body: 'Vestibulum fringilla pede sit amet augue. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.',
  modifier: 'col-4'
};
