describe('Pricing Component', () => {
  beforeEach(() => {
    // Visit the pricing story in Storybook
    cy.visit('/iframe.html?id=editorial-pricing--default&viewMode=story');
  });

  it('renders the default pricing section with correct content', () => {
    // Check header content
    cy.get('.eyebrow').should('contain', 'Choose Your Plan');
    cy.get('h2').should('contain', 'Compare Our Options');
    cy.get('.summary').should('contain', 'Select the best option for your needs');

    // Verify grid has 3 columns by default
    cy.get('.grid').should('have.class', 'md:grid-cols-3');

    // Check number of cards using updated class structure
    cy.get('.grid > .rounded-xl.bg-card').should('have.length', 3);
  });

  it('displays correct content for each pricing card', () => {
    // Check first card (Free plan)
    cy.get('.grid > .rounded-xl.bg-card').eq(0).within(() => {
      cy.get('h2').should('contain', 'DrupalX CMS').and('have.class', 'mb-2');
      cy.get('h3').should('contain', 'Free');
      cy.get('.grid.grid-cols-1 > div').should('have.length', 3);
      cy.get('a').should('contain', 'Get Started')
        .and('have.attr', 'href', '#')
        .and('have.class', 'inline-flex');
    });

    // Check second card (Technical Discovery)
    cy.get('.grid > .rounded-xl.bg-card').eq(1).within(() => {
      cy.get('h2').should('contain', 'Technical Discovery');
      cy.get('h3').should('contain', '$5,000');
      cy.get('.grid.grid-cols-1 > div').should('have.length', 3);
      cy.get('a').should('contain', 'Book Discovery')
        .and('have.attr', 'href', '#');
    });

    // Check third card (Full Project Build)
    cy.get('.grid > .rounded-xl.bg-card').eq(2).within(() => {
      cy.get('h2').should('contain', 'Full Project Build');
      cy.get('h3').should('contain', 'Contact');
      cy.get('.grid.grid-cols-1 > div').should('have.length', 3);
      cy.get('a').should('contain', 'Contact Sales')
        .and('have.attr', 'href', '#');
    });
  });

  it('verifies features list in each card', () => {
    // Check features in first card
    cy.get('.grid > .rounded-xl.bg-card').eq(0).within(() => {
      cy.get('.grid.grid-cols-1 > div').each(($el, index) => {
        // Verify check icon exists
        cy.wrap($el).find('svg.lucide-check').should('exist');

        // Verify feature text
        const expectedFeatures = [
          'Full access to open source features',
          'Community support',
          'Documentation'
        ];
        cy.wrap($el).find('p').should('contain', expectedFeatures[index]);
      });
    });

    // Check features in second card
    cy.get('.grid > .rounded-xl.bg-card').eq(1).within(() => {
      cy.get('.grid.grid-cols-1 > div').each(($el, index) => {
        const expectedFeatures = [
          'Comprehensive needs assessment',
          'Custom solution design',
          'Implementation roadmap'
        ];
        cy.wrap($el).find('p').should('contain', expectedFeatures[index]);
      });
    });
  });

  describe('Two Cards Layout', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=editorial-pricing--two-cards&viewMode=story');
    });

    it('renders the two-column grid correctly', () => {
      // Verify max width class for two-column layout
      cy.get('.max-w-5xl').should('exist');

      // Verify grid has 2 columns
      cy.get('.grid').should('have.class', 'md:grid-cols-2');

      // Check number of cards
      cy.get('.grid > .rounded-xl.bg-card').should('have.length', 2);
    });

    it('displays correct content for two-card layout', () => {
      // Check header content
      cy.get('.eyebrow').should('contain', 'Simple Pricing');
      cy.get('h2').should('contain', 'Compare Plans');
      cy.get('.summary').should('contain', 'Choose the plan that fits your needs');

      // Check first card (Basic Plan)
      cy.get('.grid > .rounded-xl.bg-card').eq(0).within(() => {
        cy.get('h2').should('contain', 'Basic Plan');
        cy.get('h3').should('contain', '$9.99');
        cy.get('.grid.grid-cols-1 > div').should('have.length', 3);
        cy.get('a').should('contain', 'Choose Basic');
      });

      // Check second card (Pro Plan)
      cy.get('.grid > .rounded-xl.bg-card').eq(1).within(() => {
        cy.get('h2').should('contain', 'Pro Plan');
        cy.get('h3').should('contain', '$29.99');
        cy.get('.grid.grid-cols-1 > div').should('have.length', 4);
        cy.get('a').should('contain', 'Choose Pro');
      });
    });
  });

  describe('Responsive Layout', () => {
    it('adapts to different screen sizes', () => {
      // Mobile view
      cy.viewport('iphone-6');
      cy.get('.grid').should('have.class', 'grid-cols-1');

      // Check mobile-specific spacing
      cy.get('.px-4').should('exist');
      cy.get('.my-12').should('exist');

      // Tablet view
      cy.viewport('ipad-2');
      cy.get('.grid').should('have.class', 'md:grid-cols-3');

      // Desktop view
      cy.viewport(1920, 1080);
      cy.get('.grid').should('have.class', 'md:grid-cols-3');
      cy.get('.lg\\:my-25').should('exist');
    });

    it('verifies responsive text classes', () => {
      cy.get('h2').should('have.class', 'text-3xl')
        .and('have.class', 'sm:text-4xl')
        .and('have.class', 'md:text-5xl')
        .and('have.class', 'lg:text-7xl');

      cy.get('.summary').should('have.class', 'text-sm')
        .and('have.class', 'sm:text-base')
        .and('have.class', 'md:text-md');
    });
  });
});
