describe('Gallery Lightbox Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-gallery--default');
  });

  it('should display the gallery section with title and intro text', () => {
    cy.get('.text-center .text-3xl.font-bold').should('contain.text', 'Gallery Title');
    cy.get('.text-center.pb-3.md\\:w-2\\/3').should('contain.html', 'This is a sample summary for the gallery');
  });

  it('should display all gallery items', () => {
    cy.get('.grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 > div').should('have.length', 4);
  });

  it('should open and close the lightbox modal', () => {
    // First get the grid item and click it directly
    cy.get('.grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 > div')
      .first()
      .click();

    // Verify modal appears
    cy.get('.modal:not(.hidden)').should('exist').and('be.visible');

    // Close modal using close button
    cy.get('.modal:not(.hidden) button.modal-close').click();

    // Verify modal is closed/hidden
    cy.get('.modal:not(.hidden)').should('not.exist');
  });

  it('should display correct media and description in lightbox modal', () => {
    // Click the first gallery item
    cy.get('.grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 > div')
      .first()
      .click();

    // Check modal content
    cy.get('.modal:not(.hidden) h2').should('contain.text', 'Gallery 1 here!');
    cy.get('.modal:not(.hidden) img').should('have.attr', 'alt', 'Gallery 1');

    // Close modal
    cy.get('.modal:not(.hidden) button.modal-close').click();
  });

  it('should be responsive on various screen sizes', () => {
    const sizes = ['iphone-6', 'ipad-2'];

    sizes.forEach((size) => {
      cy.viewport(size);

      // Check if grid layout changes appropriately
      if (size === 'iphone-6') {
        cy.get('.grid').should('have.class', 'grid-cols-1');
      } else {
        cy.get('.grid').should('have.class', 'sm:grid-cols-2');
      }

      cy.get('.grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 > div').should('have.length', 4);
    });
  });
});
