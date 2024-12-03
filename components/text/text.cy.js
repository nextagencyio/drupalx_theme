/// <reference types="cypress" />

describe('Text Block Component', () => {
  beforeEach(() => {
    // Visit the Storybook page for the Text Block component
    cy.visit('/iframe.html?id=editorial-text-block--default&viewMode=story');
  });

  it('renders default text block with all elements', () => {
    // Check basic structure and content
    cy.get('.text-eyebrow').should('have.class', 'text-gray-500').and('contain', 'Test eyebrow');
    cy.get('.text-title').should('contain', 'Title Lorem Ipsum Dolor');
    cy.get('.text-body').contains('Lorem ipsum dolor sit amet');

    // Verify links within the buttons container only
    cy.get('.text-buttons a').should('have.length', 2);
    cy.get('.text-primary-link').should('exist');
    cy.get('.text-secondary-link').should('exist');
  });

  it('renders centered layout correctly', () => {
    cy.visit('/iframe.html?id=editorial-text-block--centered&viewMode=story');

    cy.get('.text-container').within(() => {
      cy.get('.text-center').should('exist');
      cy.get('.text-buttons').should('have.class', 'justify-center');
    });
  });

  it('renders buttons-right layout correctly', () => {
    cy.visit('/iframe.html?id=editorial-text-block--buttons-right&viewMode=story');

    cy.get('.text-container').within(() => {
      cy.get('.lg\\:flex').should('exist');
      cy.get('.lg\\:justify-between').should('exist');
    });
  });

  it('handles missing optional elements gracefully', () => {
    cy.visit('/iframe.html?id=editorial-text-block--no-links&viewMode=story');

    cy.get('.text-container').within(() => {
      cy.get('.text-buttons').should('not.exist');
      cy.get('.text-eyebrow').should('exist');
      cy.get('.text-title').should('exist');
    });
  });

  it('renders single link variation correctly', () => {
    cy.visit('/iframe.html?id=editorial-text-block--single-link&viewMode=story');

    cy.get('.text-buttons a').should('have.length', 1);
    cy.get('.text-primary-link')
      .should('exist');
    cy.get('.text-secondary-link').should('not.exist');
  });

  it('applies custom className correctly', () => {
    cy.visit('/iframe.html?id=editorial-text-block--default&args=className:custom-test-class');
    cy.get('.text-container').should('have.class', 'custom-test-class');
  });

  it('verifies responsive behavior', () => {
    // Test mobile view
    cy.viewport('iphone-6');
    cy.get('.text-container').should('exist');
    cy.get('.text-buttons').should('not.have.class', 'lg:justify-end');

    // Test desktop view
    cy.viewport('macbook-15');
    cy.get('.text-container').within(() => {
      cy.get('.text-buttons').should('exist');
    });
  });
});
