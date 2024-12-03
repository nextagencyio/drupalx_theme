describe('Newsletter Form Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=editorial-newsletter--newsletter-form');
  });

  it('should have correct container classes', () => {
    cy.get('.bg-gray-100')
      .should('exist')
      .and('have.class', 'text-gray-900')
      .within(() => {
        cy.get('.container')
          .should('have.class', 'mx-auto')
          .and('have.class', 'px-8')
          .and('have.class', 'py-8')
          .and('have.class', 'lg:py-24');
      });
  });

  it('should have correct header classes', () => {
    cy.get('h2')
      .should('have.class', 'text-3xl')
      .and('have.class', 'font-semibold')
      .and('have.class', 'mb-4')
      .and('have.class', 'sm:text-4xl');
  });

  it('should have correct form layout classes', () => {
    cy.get('.md\\:w-3\\/4')
      .should('exist')
      .and('have.class', 'xl:w-1/2')
      .within(() => {
        cy.get('.flex')
          .should('have.class', 'flex-col')
          .and('have.class', 'sm:flex-row')
          .and('have.class', 'space-y-2')
          .and('have.class', 'sm:space-y-0')
          .and('have.class', 'sm:space-x-2');
      });
  });

  it('should have correct input and button styles', () => {
    cy.get('input[type="email"]')
      .should('have.class', 'flex')
      .and('have.class', 'w-full')
      .and('have.class', 'rounded-md')
      .and('have.class', 'bg-white')
      .and('have.class', 'text-xl')
      .and('have.class', 'h-12');

    cy.get('button')
      .should('have.class', 'bg-gray-900')
      .and('have.class', 'text-white')
      .and('have.class', 'hover:bg-gray-700')
      .and('have.class', 'text-xl')
      .and('have.class', 'h-12');
  });
});
