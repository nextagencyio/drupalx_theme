describe('Embed Component', () => {
  const viewports = {
    mobile: 'iphone-6',
    tablet: 'ipad-2',
    desktop: [1280, 720]
  };

  describe('Default Embed', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?args=&id=editorial-embed--default');
      // Wait for the component to be fully rendered
      cy.get('div.rounded-xl').should('exist');
    });

    it('should render the embed iframe correctly', () => {
      cy.get('iframe[src*="google.com/maps"]')
        .should('exist')
        .and('be.visible')
        .and('have.attr', 'title', 'Sample Google Map for Storybook');
    });

    it('should have default spacing classes', () => {
      // Using contains to match partial class strings
      cy.get('div.rounded-xl')
        .should('have.class', 'border')
        .should('have.class', 'bg-card')
        .should('have.class', 'text-card-foreground')
        .should('have.class', 'border-none')
        .should('have.class', 'shadow-none');
    });

    it('should display responsive iframe across different screen sizes', () => {
      Object.entries(viewports).forEach(([device, size]) => {
        if (Array.isArray(size)) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }
        cy.get('iframe')
          .should('be.visible');
      });
    });
  });

  describe('Embed with Title', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?args=&id=editorial-embed--with-title');
    });

    it('should display the title correctly', () => {
      cy.get('h3')
        .should('exist')
        .and('have.text', 'Google Maps Embed')
        .and('have.class', 'font-semibold')
        .and('have.class', 'leading-none')
        .and('have.class', 'tracking-tight');
    });

    it('should have proper title container styling', () => {
      cy.get('.flex.flex-col')
        .should('have.class', 'space-y-1.5')
        .and('have.class', 'p-6');
    });
  });

  describe('Embed with Custom ClassName', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?args=&id=editorial-embed--with-custom-class-name');
    });

    it('should apply custom modifier classes', () => {
      cy.get('div.rounded-xl')
        .should('have.class', 'bg-gray-100')
        .and('have.class', 'p-4');
    });

    it('should maintain core structural classes with custom modifiers', () => {
      cy.get('.prose')
        .should('exist')
        .and('have.class', 'max-w-none');
    });
  });
});
