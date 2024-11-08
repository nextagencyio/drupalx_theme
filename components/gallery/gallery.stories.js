import './gallery-lightbox.scss';
import GalleryLightboxTemplate from './gallery-lightbox.twig';

export default {
  title: 'Editorial/Gallery',
  argTypes: {
    section_title: {
      description: 'The title of the gallery lightbox component',
      control: 'text'
    },
    intro_text: {
      description: 'Optional intro text for the gallery lightbox component',
      control: 'text'
    },
    gallery_items: {
      description: 'Define the array of gallery lightbox items',
      control: 'array',
      type: {
        required: true
      }
    },
    modifier: {
      description: 'The modifier class to apply to the gallery lightbox component',
      control: 'text'
    }
  }
};

export const Gallery = GalleryLightboxTemplate.bind({});

Gallery.args = {
  section_title: 'Optional Title',
  modifier: 'p-2',
  intro_text:
    '<p>Optional summary text, turpis at luctus finibus, erat lectus convallis velit, at sodales purus lacus quis magna. Curabitur imperdiet sapien libero, fringilla ullamcorper nibh ullamcorper vitae. Proin sed luctus augue.</p>',
  gallery_items: [
    {
      id: 'exampleLightbox1',
      media:
        "<img src='./images/card.webp' width='100%' class='card-img-top' alt='Gallery 1' />",
      media_thumb:
        "<img src='./images/card.webp' class='img-fluid' alt='Gallery 1' />",
      media_description: 'Gallery 1 here!'
    },
    {
      id: 'exampleLightbox2',
      media:
        "<img src='./images/card.webp' width='100%' class='card-img-top' alt='Gallery 2' />",
      media_thumb:
        "<img src='./images/card.webp' class='img-fluid' alt='Gallery 2' />",
      media_description: 'Gallery 2 here!'
    },
    {
      id: 'exampleLightbox3',
      media:
        "<img src='./images/card.webp' width='100%' class='card-img-top' alt='Gallery 3' />",
      media_thumb:
        "<img src='./images/card.webp' class='img-fluid' alt='Gallery 3' />",
      media_description: 'Gallery 3 here!'
    },
    {
      id: 'exampleLightbox4',
      media:
        "<img src='./images/card.webp' width='100%' class='card-img-top' alt='Gallery 4' />",
      media_thumb:
        "<img src='./images/card.webp' class='img-fluid' alt='Gallery 4' />",
      media_description: 'Gallery 4 here!'
    },
    {
      id: 'exampleLightbox5',
      media:
        "<img src='./images/card.webp' width='100%' class='card-img-top' alt='Gallery 5' />",
      media_thumb:
        "<img src='./images/card.webp' class='img-fluid' alt='Gallery 5' />",
      media_description: 'Gallery 5 here!'
    },
    {
      id: 'exampleLightbox6',
      media:
        "<img src='./images/card.webp' width='100%' class='card-img-top' alt='Gallery 6' />",
      media_thumb:
        "<img src='./images/card.webp' class='img-fluid' alt='Gallery 6' />",
      media_description: 'Gallery 6 here!'
    },
    {
      id: 'exampleLightbox7',
      media:
        "<img src='./images/card.webp' width='100%' class='card-img-top' alt='Gallery 7' />",
      media_thumb:
        "<img src='./images/card.webp' class='img-fluid' alt='Gallery 7' />",
      media_description: 'Gallery 7 here!'
    },
    {
      id: 'exampleLightbox8',
      media:
        "<img src='./images/card.webp' width='100%' class='card-img-top' alt='Gallery 8' />",
      media_thumb:
        "<img src='./images/card.webp' class='img-fluid' alt='Gallery 8' />",
      media_description: 'Gallery 8 here!'
    }
  ]
};
