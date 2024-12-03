describe('Quote Component', () => {
  beforeEach(() => {
    // Visit the Storybook story for the Quote component
    cy.visit('/iframe.html?id=editorial-quote--default');
  });

  it('should render the default quote component correctly', () => {
    // Check if the main container exists with correct classes
    cy.get('.quote-card')
      .should('exist')
      .and('have.class', 'rounded-xl')
      .and('have.class', 'bg-card');

    // Verify quote content container
    cy.get('.quote-content').should('exist');

    // Check if logo is rendered
    cy.get('.quote-content img[alt="Logo"]')
      .should('exist')
      .and('have.class', 'img-fluid');

    // Verify quote text
    cy.get('blockquote p')
      .should('exist')
      .and('have.class', 'text-3xl')
      .and('have.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris mi, aliquam');

    // Check author thumbnail
    cy.get('.rounded-full img[alt="Thumb"]')
      .should('exist');

    // Verify author name
    cy.get('.font-bold')
      .should('exist')
      .and('have.text', 'Author Name');

    // Check job title
    cy.get('.text-muted-foreground')
      .should('exist')
      .and('have.text', 'Job Title');
  });

  it('should handle missing optional properties', () => {
    // Visit the story with modified args to remove optional properties
    cy.visit('/iframe.html?id=editorial-quote--default&args=logo:;thumb:;job_title:');

    // Verify the component still renders without logo
    cy.get('.quote-content img[alt="Logo"]').should('not.exist');

    // Verify the component still renders without thumbnail
    cy.get('.rounded-full img[alt="Thumb"]').should('not.exist');

    // Verify the component still renders without job title
    cy.get('.text-muted-foreground').should('not.exist');

    // Core elements should still exist
    cy.get('blockquote').should('exist');
    cy.get('.font-bold').should('exist');
  });

  it('should maintain responsive layout', () => {
    // Test different viewport sizes
    cy.viewport('iphone-6');
    cy.get('.quote-card').should('have.class', 'w-full');

    cy.viewport('macbook-13');
    cy.get('.quote-card')
      .should('have.class', 'lg:w-4/5')
      .and('have.class', 'xl:w-2/3');
  });
});
