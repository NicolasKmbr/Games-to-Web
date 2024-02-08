describe('Test Memory Game Navigation from Home', () => {
  it('Checks if clicking on the navigation button Memory Game will navigation to corresponding page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Memory Game').click()
    cy.url().should('include', '/memory')


  })
})