import galleryLightboxTemplate from './gallery.twig';
import './gallery.behavior.js';

/**
 * Meta configuration for the Gallery component.
 * Aligns with React Storybook by specifying title, component, and argTypes.
 */
export default {
  title: 'Editorial/Gallery',
  component: galleryLightboxTemplate,
  argTypes: {
    section_title: {
      description: 'The title of the gallery lightbox component',
      control: 'text',
      defaultValue: 'Optional Title',
    },
    intro_text: {
      description: 'Optional intro text for the gallery lightbox component',
      control: 'text',
      defaultValue:
        '<p>Optional summary text, turpis at luctus finibus, erat lectus convallis velit, at sodales purus lacus quis magna. Curabitur imperdiet sapien libero, fringilla ullamcorper nibh ullamcorper vitae. Proin sed luctus augue.</p>',
    },
    gallery_items: {
      description: 'Define the array of gallery lightbox items',
      control: 'object',
      defaultValue: [
        {
          id: 'exampleLightbox1',
          media:
            "<img src='./images/card.webp' width='100%' class='card-img-top' alt='Gallery 1' />",
          media_thumb:
            "<img src='./images/card.webp' alt='Gallery 1' />",
          media_description: 'Gallery 1 here!',
        },
      ],
    },
    modifier: {
      description: 'The modifier class to apply to the gallery lightbox component',
      control: 'text',
      defaultValue: 'p-2',
    },
  },
};

const template = (args) => galleryLightboxTemplate(args);

/**
 * Default Gallery Story
 * Mirrors the React Storybook's 'Default' story structure.
 */
export const Default = template.bind({});
Default.args = {
  section_title: 'Gallery Title',
  intro_text:
    '<p>This is a sample summary for the gallery.</p>',
  modifier: 'p-2',
  gallery_items: [
    {
      id: 'exampleLightbox1',
      media:
        "<img src='./images/card.webp' width='100%' alt='Gallery 1' />",
      media_thumb:
        "<img src='./images/card.webp' alt='Gallery 1' />",
      media_description: 'Gallery 1 here!',
    },
    {
      id: 'exampleLightbox2',
      media:
        "<img src='./images/card.webp' width='100%' alt='Gallery 2' />",
      media_thumb:
        "<img src='./images/card.webp' alt='Gallery 2' />",
      media_description: 'Gallery 2 here!',
    },
    {
      id: 'exampleLightbox3',
      media:
        "<img src='./images/card.webp' width='100%' alt='Gallery 3' />",
      media_thumb:
        "<img src='./images/card.webp' alt='Gallery 2' />",
      media_description: 'Gallery 2 here!',
    },
    {
      id: 'exampleLightbox4',
      media:
        "<img src='./images/card.webp' width='100%' alt='Gallery 4' />",
      media_thumb:
        "<img src='./images/card.webp' alt='Gallery 2' />",
      media_description: 'Gallery 2 here!',
    },
  ],
};
