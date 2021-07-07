describe('dvTestSuite', () => {
    it('VerifyTitleOfThePage', () => {
        cy.visit('http://localhost:4200/pages/layout/stepper');
        cy.get('.ng-star-inserted').contains ('Step content #1');
        cy.get("button[type='submit'][aria-disabled='false']").contains('next').click();
        cy.wrap('.label-index').should('have','"ng-reflect-ng-if": "true"')
    })

})