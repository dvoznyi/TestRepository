import iePage from "../pages/iePage";

it.only('TimerTest', () => {
cy.visit('https://death-to-ie11.com/');
сy.get('.minutes value')
cy.clock()
cy.tick(600000)

})