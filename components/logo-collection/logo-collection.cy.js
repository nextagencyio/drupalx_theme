describe('Logo Collection Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=editorial-logo-collection--default');
  });

  it('renders the default story with correct title and logos', () => {
    cy.get('h2').should('contain.text', 'Trusted by top companies worldwide');
    cy.get('.max-w-\\[100px\\]').should('exist');
    cy.get('.md\\:max-w-\\[120px\\]').should('exist');
    cy.get('img').should('have.length', 3);
    cy.get('img').first().should('have.attr', 'alt', 'Webflow logo');
  });

  it('maintains responsive layout structure', () => {
    cy.get('section').should('have.class', 'py-8');
    cy.get('section').should('have.class', 'md:py-12');
    cy.get('section').should('have.class', 'bg-white');
    cy.get('.container').should('have.class', 'mx-auto');
    cy.get('.container').should('have.class', 'px-4');
    cy.get('.flex').should('have.class', 'flex-col');
    cy.get('.flex').should('have.class', 'md:flex-row');
    cy.get('.flex').should('have.class', 'md:items-center');
  });

  it('verifies grid layout for logos', () => {
    cy.get('.grid')
      .should('have.class', 'grid-cols-2')
      .should('have.class', 'sm:grid-cols-3')
      .should('have.class', 'md:flex')
      .should('have.class', 'md:flex-wrap');
  });

  it('checks logo container spacing', () => {
    cy.get('.grid')
      .should('have.class', 'gap-6')
      .should('have.class', 'md:gap-8');
  });

  context('Few Logos Variant', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=editorial-logo-collection--few-logos&viewMode=story');
    });

    it('renders with fewer logos correctly', () => {
      cy.get('h2').should('contain.text', 'Our Partners');
      cy.get('.grid > div').should('have.length', 2);
      cy.get('img').should('have.length', 2);
    });
  });

  context('Many Logos Variant', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=editorial-logo-collection--many-logos');
    });

    it('renders with additional logos correctly', () => {
      cy.get('h2').should('contain.text', 'Clients We\'ve Worked With');
      cy.get('.grid > div').should('have.length', 6);
      cy.get('img').should('have.length', 6);
    });
  });

  it('checks responsive title styling', () => {
    cy.get('h2')
      .should('have.class', 'text-xl')
      .should('have.class', 'font-bold')
      .should('have.class', 'text-gray-800')
      .should('have.class', 'mb-6')
      .should('have.class', 'md:mb-0')
      .should('have.class', 'md:w-1/5')
      .should('have.class', 'md:pr-4')
      .should('have.class', 'md:flex-shrink-0')
      .should('have.class', 'text-center')
      .should('have.class', 'md:text-left');
  });

  it('verifies logo container alignment', () => {
    cy.get('.grid > div')
      .should('have.class', 'flex')
      .should('have.class', 'items-center')
      .should('have.class', 'justify-center')
      .should('have.class', 'md:justify-start');
  });
});
