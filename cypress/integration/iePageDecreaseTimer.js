import iePage from "../pages/iePage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
it.only('TimerTest', () => {
// iePage.visit();
const now = new Date(Date.UTC(2021, 8, 10)).getTime()
cy.clock(now)
cy.visit('https://death-to-ie11.com/')
cy.clock()
// сy.get('.minutes value').then(($minutesvalue) => {
cy.tick(600000)
})
