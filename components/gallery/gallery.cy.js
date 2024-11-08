describe('Gallery Lightbox Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-gallery--gallery&viewMode=story');
  });

  it('should display the gallery section with title and intro text', () => {
    cy.get('.mb-4.text-md-center').should('contain.text', 'Optional Title');
    cy.get('.text-md-center.pb-3.col-md-8').should('contain.html', 'Optional summary text');
  });

  it('should display all gallery items', () => {
    cy.get('.row > .col-6.col-md-3.mb-3').should('have.length', 8);
  });

  it('should open and close the lightbox modal', () => {
    cy.get('.col-6.col-md-3.mb-3').first().find('a').click();
    cy.get('.modal').first().should('have.class', 'show');

    cy.get('.modal').first().find('button.btn-secondary').click();
  });

  it('should display correct media and description in lightbox modal', () => {
    const firstItem = cy.get('.col-6.col-md-3.mb-3').first();
    firstItem.find('a').click();

    cy.get('.modal').first().find('.modal-title').should('contain.text', 'Gallery 1 here!');
    cy.get('.modal').first().find('.gallery-body img').should('have.attr', 'alt', 'Gallery 1');

    cy.get('.modal').first().find('button.btn-secondary').click();
  });

  it('should be responsive on various screen sizes', () => {
    const sizes = ['iphone-6', 'ipad-2'];

    sizes.forEach((size) => {
      cy.viewport(size);

      cy.get('.row > .col-6.col-md-3.mb-3').should('have.length', 8);
    });
  });
});
