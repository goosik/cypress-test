describe('Main components', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check main components', () => {
    // check filters inputs
    cy.get('#filters input')
      .should('be.visible');
    // check 3 columns
    cy.get('.App-column').should(($column) => {
      expect($column).to.have.length(3);
    });
    // check cards exist
    cy.get('.CrewMember-container').first().children()
      .should('have.length', 2);
  });
});
