import iePage from "../pages/iePage";

it.only('TimerTest', () => {
iePage.visit();
сy.get('.minutes value')
cy.clock()
cy.tick(600000)

})