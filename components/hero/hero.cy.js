describe('Hero Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-hero--default');
  });

  it('should display the hero title', () => {
    cy.get('h1.text-4xl').contains('Welcome to').should('exist');
  });

  it('should display the hero body text', () => {
    cy.get('.text-xl').contains('This is a brief summary').should('exist');
  });

  it('should display the primary button with correct text and styles', () => {
    cy.get('a.bg-primary').contains('Learn More').should('exist')
      .should('have.class', 'inline-flex')
      .should('have.class', 'items-center')
      .should('have.class', 'justify-center')
      .should('have.class', 'rounded-md');
  });

  it('should display the secondary button with correct text and styles', () => {
    cy.get('a.border-input').contains('Get Started').should('exist')
      .should('have.class', 'inline-flex')
      .should('have.class', 'items-center')
      .should('have.class', 'justify-center')
      .should('have.class', 'rounded-md');
  });

  it('should display the image correctly based on layout', () => {
    // Test image_top layout
    cy.get('.mb-4.lg\\:mb-8 img').should('exist');

    // Navigate to image_bottom layout
    cy.visit('/iframe.html?args=&id=editorial-hero--image-bottom');
    cy.get('.mt-6.lg\\:mt-12 img').should('exist');

    // Navigate to image_bottom_split layout
    cy.visit('/iframe.html?args=&id=editorial-hero--image-bottom-split');
    cy.get('.mt-6.lg\\:mt-12 img').should('exist');
  });

  it('should have correct responsive classes', () => {
    // Mobile viewport
    cy.viewport('iphone-6');
    cy.get('.text-4xl').should('exist');
    cy.get('.mb-6').should('exist');

    // Tablet/Desktop viewport
    cy.viewport('macbook-15');
    cy.get('.lg\\:text-5xl').should('exist');
    cy.get('.lg\\:mb-12').should('exist');
  });

  it('should handle image_bottom_split layout correctly', () => {
    cy.visit('/iframe.html?args=&id=editorial-hero--image-bottom-split');

    // Check for split layout structure
    cy.get('.flex.flex-col.lg\\:flex-row').should('exist');
    cy.get('.lg\\:w-1\\/2').should('have.length', 2);

    // Verify content placement
    cy.get('.lg\\:w-1\\/2').first().find('h1').should('exist');
    cy.get('.lg\\:w-1\\/2').last().find('.text-xl').should('exist');
  });

  it('should have proper spacing and container classes', () => {
    cy.visit('/iframe.html?args=&id=editorial-hero--default');

    // Check hero wrapper
    cy.get('.hero')
      .should('exist')
      .should('have.class', 'mx-auto');

    // Check hero div with all necessary classes
    cy.get('.hero')
      .should('exist')
      .should('have.class', 'mx-auto')
      .should('have.class', 'max-w-4xl');
  });

  // Add separate test for image_bottom_split layout classes
  it('should have proper hero classes in split layout', () => {
    cy.visit('/iframe.html?args=&id=editorial-hero--image-bottom-split');

    // Check hero wrapper classes for split layout
    cy.get('.hero')
      .should('exist')
      .should('have.class', 'mt-6')
      .should('have.class', 'mx-auto');
  });
});
