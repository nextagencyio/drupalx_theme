describe('Side-by-Side Component', () => {
  beforeEach(() => {
    cy.visit('iframe.html?args=&id=editorial-side-by-side--left&viewMode=story');
  });

  it('should render the Left variant correctly', () => {
    // Check for headline
    cy.get('.side-by-side .row').within(() => {
      cy.contains('Lorem ipsum dolor sit amet, elit.');
    });

    // Check for eyebrow
    cy.get('.badge').contains('Eyebrow');

    // Check if media image is present
    cy.get('.side-by-side .shadow img').should('have.attr', 'src', './images/card.webp');

    // Check for body text
    cy.contains('Contra legem facit qui id facit quod lex prohibet.');

    // Check for button
    cy.get('.side-by-side .btn-primary').contains('Call to action');
  });

  it('should render the Right variant correctly', () => {
    cy.visit('/iframe.html?args=&id=editorial-side-by-side--right&viewMode=story');

    // Check for headline
    cy.get('.side-by-side .row').within(() => {
      cy.contains('Lorem ipsum dolor sit amet, elit.');
    });

    // Check for eyebrow
    cy.get('.badge').contains('Eyebrow');

    // Check if media image is present
    cy.get('.side-by-side .shadow img').should('have.attr', 'src', './images/card.webp');

    // Check for body text
    cy.contains('Contra legem facit qui id facit quod lex prohibet.');

    // Check for button
    cy.get('.side-by-side .btn-primary').contains('Call to action');

    // Check if flex-lg-row-reverse is applied correctly
    cy.get('.side-by-side .row').should('have.css', 'flex-direction', 'row-reverse');
  });

  context('Responsive Design Tests', () => {
    ['ipad-2', 'iphone-6+', 'macbook-15'].forEach((size) => {
      it(`should display correctly on ${size} screen`, () => {
        cy.viewport(size);

        cy.get('.side-by-side')
          .should('be.visible');

        cy.get('.badge').contains('Eyebrow');
        cy.contains('Lorem ipsum dolor sit amet, elit.').should('be.visible');
        cy.get('.side-by-side .shadow img')
          .should('have.attr', 'src', './images/card.webp');
        cy.contains('Contra legem facit qui id facit quod lex prohibet.')
          .should('be.visible');
        cy.get('.side-by-side .btn-primary')
          .contains('Call to action')
          .should('be.visible');
      });
    });
  });
});
