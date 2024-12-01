describe('Accordion Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=editorial-accordion--default&viewMode=story');
  });

  it('should display the accordion title', () => {
    cy.get('h2').should('contain', 'Accordion Group Title');
  });

  it('should display all accordion items', () => {
    cy.get('.divide-y > div').should('have.length', 3);
  });

  it('should display correct content for each accordion item', () => {
    // Check first accordion item
    cy.get('.divide-y > div').first().within(() => {
      cy.get('button').should('contain', 'Curabitur aliquet quam id dui posuere blandit');
      cy.get('a').should('have.attr', 'href', 'https://www.google.com')
        .and('contain', 'Learn more');
    });
  });

  it('should handle accordion expansion and collapse', () => {
    // Get first accordion item
    cy.get('.divide-y > div').first().within(() => {
      // Initial state - content should be hidden
      cy.get('button[aria-expanded="false"]').should('exist');

      // Click to expand
      cy.get('button').click();
      cy.get('button[aria-expanded="true"]').should('exist');

      // Click to collapse
      cy.get('button').click();
      cy.get('button[aria-expanded="false"]').should('exist');
    });
  });

  it('should allow multiple items to be expanded simultaneously', () => {
    // Open all accordion items
    cy.get('.divide-y > div').each(($item) => {
      cy.wrap($item).within(() => {
        cy.get('button').click();
        cy.get('button[aria-expanded="true"]').should('exist');
      });
    });
  });

  it('should render the "Learn more" link correctly', () => {
    cy.get('.divide-y > div').each(($item) => {
      cy.wrap($item).within(() => {
        cy.get('a')
          .should('have.attr', 'href', 'https://www.google.com')
          .and('contain', 'Learn more');
      });
    });
  });

  context('Responsive Design', () => {
    const viewports = [
      { width: 320, height: 568, size: 'mobile' },
      { width: 768, height: 1024, size: 'tablet' },
      { width: 1024, height: 768, size: 'laptop' },
      { width: 1920, height: 1080, size: 'desktop' }
    ];

    viewports.forEach(({ width, height, size }) => {
      it(`should render correctly at ${size} viewport (${width}x${height})`, () => {
        cy.viewport(width, height);

        // Basic visibility checks
        cy.get('.container').should('be.visible');
        cy.get('.bg-white').should('be.visible');

        // Verify accordion functionality at this viewport
        cy.get('.divide-y > div').first().within(() => {
          cy.get('button').click();
          cy.get('button[aria-expanded="true"]').should('exist');
        });
      });
    });
  });
});
