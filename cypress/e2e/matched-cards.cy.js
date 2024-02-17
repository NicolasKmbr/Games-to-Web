describe('template spec', () => {

  before(() => {
    // Visit the MemoryBoard component page
    cy.visit('http://localhost:3000/memory');
  });

  it('passes', () => {

    cy.window().should((win) => {
      expect(win.cardsState).to.exist; // Ensure cardsState exists
      expect(win.cardsState.length).to.be.greaterThan(0); // Ensure cardsState is not empty or meets your condition
    }).then((win) => {
      const seen = new Set();
      cy.log("the cards:" + JSON.stringify(win.cardsState));
      for (const card of win.cardsState) {
        const identifier = `${card.rank}-${card.suit}`;
        if (!seen.has(identifier)) { // Check if the card has not been processed yet
          seen.add(identifier); // Mark the card as seen
          // Click on the card
          cy.get(`[data-cy="card-${card.rank}-${card.suit}"]`).click({multiple: true});
          cy.get(`[data-cy="card-${card.rank}-${card.suit}"]`).should('not.be.visible');
        }
      }
    });
  })
})