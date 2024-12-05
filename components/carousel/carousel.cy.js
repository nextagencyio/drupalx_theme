describe('Carousel Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-carousel--default');
  });

  it('should display the carousel', () => {
    cy.get('.carousel').should('be.visible');
  });

  it('should display the correct number of carousel items', () => {
    // Using a more specific selector to target only the direct carousel items
    cy.get('.carousel > .carousel-content > .carousel-item').should('have.length', 3);
  });

  it('should display carousel content correctly', () => {
    cy.get('.carousel-content')
      .should('have.class', 'flex')
      .should('have.class', 'overflow-x-auto')
      .should('have.class', 'snap-x')
      .should('have.class', 'snap-mandatory');
  });

  it('should display carousel items with correct classes', () => {
    cy.get('.carousel-item')
      .should('have.class', 'snap-start')
      .should('have.class', 'flex-none')
      .should('have.class', 'w-full');
  });

  it('should display the navigation buttons', () => {
    cy.get('.carousel-prev')
      .should('be.visible')
      .find('svg').should('exist');

    cy.get('.carousel-next')
      .should('be.visible')
      .find('svg').should('exist');
  });

  it('should navigate between slides', () => {
    // Get the carousel content element
    cy.get('.carousel-content').then($content => {
      // Store initial scroll position
      const initialScroll = $content[0].scrollLeft;

      // Click next button
      cy.get('.carousel-next').click();

      // Check that content has scrolled
      cy.get('.carousel-content').should($newContent => {
        expect($newContent[0].scrollLeft).to.be.greaterThan(initialScroll);
      });

      // Click prev button
      cy.get('.carousel-prev').click();

      // Check that content has scrolled back
      cy.get('.carousel-content').should($newContent => {
        expect($newContent[0].scrollLeft).to.equal(initialScroll);
      });
    });
  });

  context('Responsive Design', () => {
    it('should display correctly on mobile devices', () => {
      cy.viewport('iphone-6');
      cy.get('.carousel').should('be.visible');

      // Check mobile-specific navigation button positioning
      cy.get('.carousel-prev').should('have.class', 'left-2');
      cy.get('.carousel-next').should('have.class', 'right-2');
    });

    it('should display correctly on tablet and desktop devices', () => {
      cy.viewport('ipad-2');
      cy.get('.carousel').should('be.visible');

      // Check tablet/desktop-specific navigation button positioning
      cy.get('.carousel-prev').should('have.class', 'md:left-4');
      cy.get('.carousel-next').should('have.class', 'md:right-4');
    });

    it('should handle max-width class correctly', () => {
      cy.viewport('macbook-15');
      // Check the default class from the story
      cy.get('.carousel').should('have.class', 'max-w-4xl');
    });
  });

  context('Accessibility', () => {
    it('should have proper ARIA labels on navigation buttons', () => {
      cy.get('.carousel-prev').should('have.attr', 'aria-label', 'Previous slide');
      cy.get('.carousel-next').should('have.attr', 'aria-label', 'Next slide');
    });

    it('should have proper tab navigation', () => {
      cy.get('.carousel-prev').should('have.prop', 'tagName', 'BUTTON');
      cy.get('.carousel-next').should('have.prop', 'tagName', 'BUTTON');
    });
  });

  context('Content Display', () => {
    it('should display images correctly', () => {
      cy.get('.carousel-item img')
        .should('have.class', 'd-block')
        .should('have.class', 'w-full')
        .should('have.attr', 'alt');
    });

    it('should display text content when provided', () => {
      cy.get('.carousel-item').first().within(() => {
        cy.contains('First Slide').should('exist');
        cy.contains('This is the first slide').should('exist');
      });
    });
  });
});
