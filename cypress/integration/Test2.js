import stepperPage from '../pages/stepperPage'
import basePage from '../pages/basePage';
describe('dvTestSuite', () => {
  it('VerifyTitleOfThePage', () => {
    stepperPage.visit();
    cy.get('nav nb-select').click();
    cy.get('.options-list').contains('Dark').click()
    cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')
    cy.get('nav nb-select').click();
    cy.get('.options-list').contains('Cosmic').click()
    cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(50, 50, 89)')
    cy.get('nav nb-select').click();
    cy.get('.options-list').contains('Corporate').click()
    cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })
  it.only('page object', () => {
    stepperPage.visit();
    basePage.themeListOpen()
    basePage.themeOptionChoose('Dark')
    basePage.themeValueCheck('Dark')
    basePage.themeListOpen()
    basePage.themeOptionChoose('Cosmic')
    basePage.themeValueCheck('Cosmic')    
    basePage.themeListOpen()
    basePage.themeOptionChoose('Corporate')
    basePage.themeValueCheck('Corporate')

  })
})
