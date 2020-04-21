describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Apply filter by name and clear', () => {
    const filteredName = 'emma'
    const notFilteredName = 'lloyd'
    // check availability of cards
    cy.get('div.CrewMemeber-name > div')
      .should('contain', filteredName)
      .should('contain', notFilteredName);
    // apply filter
    cy.get('#name')
      .type(filteredName).should('have.value', filteredName)
    cy.get('button[type="submit"]')
      .click();
    // check correct filtering
    cy.get('div.CrewMemeber-name > div')
      .should('contain', filteredName)
      .should('not.contain', notFilteredName);
    // clear filter
    cy.get('button:contains("Clear")')
      .click();
    cy.get('div.CrewMemeber-name > div')
      .should('contain', filteredName)
      .should('contain', notFilteredName);
  });

  it('Apply filter by city', () => {
    const filteredCity = 'sheffield';
    const notFilteredCity = 'cardiff';
    // check cards for cities
    cy.get('div.CrewMemeber-name > div')
      .should('contain', filteredCity)
      .should('contain', notFilteredCity);
    // apply filter
    cy.get('#city')
      .type(filteredCity).should('have.value', filteredCity)
    cy.get('button[type="submit"]')
      .click();
    // check filter
    cy.get('div.CrewMemeber-name > div')
      .should('contain', filteredCity)
      .should('not.contain', notFilteredCity);
  });
});
