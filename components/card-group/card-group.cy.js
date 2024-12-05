describe('Card Group Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-card-group--default');
  });

  it('should display the card group section title', () => {
    cy.get('h2')
      .should('be.visible')
      .and('contain', 'Featured Cards');
  });

  it('should display the correct number of cards', () => {
    cy.get('.grid > div')
      .should('be.visible')
      .and('have.length', 3);
  });

  it('should display custom cards with correct elements', () => {
    cy.get('.grid > div').each(($card) => {
      // Check if it's a custom card by looking for the img element
      cy.wrap($card).then(($el) => {
        if ($el.find('.card-img-top').length) {
          cy.wrap($el).find('.card-img-top').should('be.visible');
          cy.wrap($el).find('[class*="card-title"]').should('be.visible');
          cy.wrap($el).find('.badge').should('have.length.at.least', 1);
          cy.wrap($el).find('.card-text').should('be.visible');
          cy.wrap($el).find('a').should('be.visible');
        }
      });
    });
  });

  it('should display stat cards with correct elements', () => {
    cy.get('.grid > div').each(($card) => {
      // Check if it's a stat card
      cy.wrap($card).then(($el) => {
        if ($el.find('svg').length) {
          cy.wrap($el).find('svg').should('be.visible');
          cy.wrap($el).find('.card-title').should('be.visible');
          cy.wrap($el).find('p').should('be.visible');
        }
      });
    });
  });

  context('Responsive Design', () => {
    it('should display cards in a single column on mobile', () => {
      cy.viewport('iphone-6');
      cy.get('.grid').should('have.class', 'grid-cols-1');
    });

    it('should display cards in two columns on tablet', () => {
      cy.viewport('ipad-mini');
      cy.get('.grid').should('have.class', 'sm:grid-cols-2');
    });

    it('should display cards in three columns on desktop when not specified', () => {
      cy.viewport('macbook-15');
      cy.get('.grid').should('have.class', 'sm:grid-cols-2');
      cy.get('.grid').should('have.class', 'lg:grid-cols-3');
    });
  });
});

describe('Two Column Card Group', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-card-group--two-cards');
  });

  it('should display cards in two columns', () => {
    cy.viewport('macbook-15');
    cy.get('.grid')
      .should('have.class', 'sm:grid-cols-2')
      .and('not.have.class', 'lg:grid-cols-3');
  });

  it('should display exactly two cards', () => {
    cy.get('.grid > div').should('have.length', 2);
  });
});

describe('Stat Cards Group', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-card-group--stat-cards-only');
  });

  it('should display the stat cards section title', () => {
    cy.get('h2')
      .should('be.visible')
      .and('contain', 'Stat Cards');
  });

  it('should display the correct number of stat cards', () => {
    cy.get('.grid > div')
      .should('be.visible')
      .and('have.length', 2);
  });

  it('should display stat cards with required elements', () => {
    cy.get('.grid > div').each(($stat) => {
      cy.wrap($stat).find('svg').should('be.visible');
      cy.wrap($stat).find('.card-title').should('be.visible');
      cy.wrap($stat).find('p').should('be.visible');
    });
  });
});
