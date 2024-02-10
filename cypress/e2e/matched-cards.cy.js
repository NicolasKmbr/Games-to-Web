describe('template spec', () => {

  beforeEach(() => {
    // Visit the MemoryBoard component page
    cy.visit('http://localhost:3000/memory');
  });

  it('passes', () => {
    cy.wait(500);
    // Click on a card
    cy.get('[data-cy="card-ace-diamonds"]').click({multiple: true});
    
    cy.get('[data-revealed="true"]').should('have.attr', 'data-revealed', 'true');

    // // Wait for the transition to complete
    //cy.wait(700); // Adjust the wait time based on your transition-duration

    // // Check if both cards have opacity 0
    // // You may need to adjust the selector to target the specific elements that receive the opacity change.
    //cy.get('[alt="Memory Card"]').eq(0).should('have.css', 'opacity', '0');
    // cy.get('[alt="Memory Card"]').eq(1).should('have.css', 'opacity', '0');
  })
})