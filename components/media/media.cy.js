describe('Media Component', () => {
  context('Default Image Story', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=editorial-media--default');
    });

    it('renders the default image story correctly', () => {
      cy.get('img')
        .should('exist')
        .and('have.attr', 'src', './images/card.webp')
        .and('have.attr', 'alt', 'Example image')
        .and('have.attr', 'width', '1280')
        .and('have.attr', 'height', '720');
    });

    it('maintains aspect ratio of the image', () => {
      cy.get('img').should(($img) => {
        const aspectRatio = $img[0].width / $img[0].height;
        expect(aspectRatio).to.be.closeTo(1280 / 720, 0.1);
      });
    });
  });

  context('Video Story', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=editorial-media--video');
    });

    it('renders the iframe for video correctly', () => {
      cy.get('iframe')
        .should('exist')
        .and('have.attr', 'width', '560')
        .and('have.attr', 'height', '315')
        .and('have.attr', 'title', 'YouTube video player');
    });

    it('has correct YouTube embed URL', () => {
      cy.get('iframe')
        .should('have.attr', 'src')
        .and('include', 'youtube.com/embed/')
        .and('include', 'I95hSyocMlg');
    });

    it('has necessary iframe attributes for security and functionality', () => {
      cy.get('iframe').should('have.attr', 'allow').and('include', 'accelerometer')
        .and('include', 'autoplay')
        .and('include', 'clipboard-write')
        .and('include', 'encrypted-media')
        .and('include', 'gyroscope')
        .and('include', 'picture-in-picture')
        .and('include', 'web-share');
    });
  });
});
