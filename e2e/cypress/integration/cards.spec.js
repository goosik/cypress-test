describe('Cards', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check card movement forward', () => {
    // get name on the first card
    cy.get('.CrewMemeber-name div')
      .then(($elem) => {
        const text = $elem.get(0).innerText;
        // get column name
        cy.get(`.App-column:contains("${text}") h2`)
          .then(($elem) => {
            const columnName = $elem.text();
            // move card
            cy.get(`div.CrewMember-container:contains("${text}") button.CrewMember-up`)
              .click();
            // get new column name and check
            cy.get(`.App-column:contains("${text}") h2`)
              .then(($elem) => {
                const newColumnName = $elem.text();

                expect(columnName)
                  .not
                  .to
                  .eq(newColumnName);
              });
          });
      });
  });

  it('Check card movement back', () => {
    cy.window()
      .then(
        window => console.log(window.localStorage.getItem('redux'))
      );
    // get name on the first card
    cy.get('.App-column:contains("Hired") .CrewMemeber-name div')
      .then(($elem) => {
        const text = $elem.get(0).innerText;
        //move card
        cy.get(`div.CrewMember-container:contains("${text}") button`)
          .should(($button) => {
            // check 1 button only exists
            expect($button)
              .to
              .have
              .length(1);
          })
          .click();
        // get new column name and check
        cy.get(`.App-column:contains("${text}") h2`)
          .then(($elem) => {
            const newColumnName = $elem.text();
            expect(newColumnName)
              .not
              .to
              .eq('Hired');
            cy.get(`div.CrewMember-container:contains("${text}") button`)
              .should(($button) => {
                // check 2 buttons exist
                expect($button)
                  .to
                  .have
                  .length(2);
              });
          });
      });
  });
});
