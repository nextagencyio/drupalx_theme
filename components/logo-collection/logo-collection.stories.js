import LogoCollectionTemplate from './logo-collection.twig';

export default {
  title: 'Editorial/Logo Collection',
  component: LogoCollectionTemplate,
  argTypes: {
    title: {
      description: 'Title for the logo collection section',
      control: 'text',
      defaultValue: 'Trusted by top companies worldwide'
    },
    logos: {
      description: 'Array of logo objects',
      control: 'object'
    }
  }
};

// Sample logo data
const sampleLogos = [
  {
    name: "Webflow",
    media: '<img src="/images/card.webp" alt="Webflow logo" class="max-w-[120px]">'
  },
  {
    name: "Relume",
    media: '<img src="/images/card.webp" alt="Relume logo" class="max-w-[120px]">'
  },
  {
    name: "Figma",
    media: '<img src="/images/card.webp" alt="Figma logo" class="max-w-[120px]">'
  }
];

export const Default = {
  args: {
    title: "Trusted by top companies worldwide",
    logos: sampleLogos
  }
};

export const FewLogos = {
  args: {
    title: "Our Partners",
    logos: sampleLogos.slice(0, 2)
  }
};

export const ManyLogos = {
  args: {
    title: "Clients We've Worked With",
    logos: [...sampleLogos, ...sampleLogos]
  }
};
