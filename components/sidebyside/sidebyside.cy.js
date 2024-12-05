describe('Side-by-Side Component', () => {
  beforeEach(() => {
    // Visit the page where the component is rendered
    cy.visit('/iframe.html?id=editorial-side-by-side--default');
  });

  it('renders default layout with all elements', () => {
    cy.get('.flex').should('exist');
    cy.get('h2').should('contain', 'Side by Side Component');
    cy.get('img').should('have.attr', 'alt', 'Example image');
    cy.get('p').should('contain', 'This is a sample');
    cy.get('a')
      .should('contain', 'Learn More');
  });

  it('applies correct layout classes', () => {
    // Check default left layout
    cy.get('.flex').should('not.have.class', 'lg:flex-row-reverse');

    // Visit right layout variant
    cy.visit('/iframe.html?id=editorial-side-by-side--right-layout');
    cy.get('.flex').should('have.class', 'lg:flex-row-reverse');
  });

  it('displays eyebrow badge when provided', () => {
    cy.get('.sidebyside-badge')
      .should('exist')
      .and('contain', 'Featured');
  });

  it('has correct responsive layout classes', () => {
    cy.get('.flex')
      .should('have.class', 'flex-col')
      .and('have.class', 'lg:flex-row');

    cy.get('.w-full')
      .first()
      .should('have.class', 'lg:w-1/2');
  });

  it('renders stat cards correctly in features section', () => {
    // Visit the variant with stat cards
    cy.visit('/iframe.html?id=editorial-side-by-side--with-stat-cards');

    // Check the title
    cy.get('h2').should('contain', 'Discover the Unmatched Advantages');

    // Verify stat cards are present
    cy.get('.flex-col.sm\\:flex-row').within(() => {
      // First stat card
      cy.contains('Decoupled Architecture').should('exist');
      cy.contains('Build flexible applications').should('exist');

      // Second stat card
      cy.contains('AI Optimization').should('exist');
      cy.contains('Leverage intelligent algorithms').should('exist');
    });

    // Verify SVG logos are present in stat cards
    cy.get('svg').should('have.length.at.least', 2);
  });

  it('maintains proper spacing and gaps', () => {
    cy.get('.flex').should('have.class', 'gap-6');
    cy.get('.flex-col').should('have.class', 'gap-4');
  });
});
