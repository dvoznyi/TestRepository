describe('dvTestSuite', () => {
  it('VerifyTitleOfThePage', () => {
    cy.visit('http://localhost:4200/')
    cy.get('nav nb-select').click();
    cy.get('.options-list').contains('Dark').click()
    cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')
  })
})
