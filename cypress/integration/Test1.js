import stepperPage from '../pages/stepperPage'

describe('dvTestSuite', () => {
    it('VerifyTitleOfThePage', () => {
        cy.visit('http://localhost:4200/pages/layout/stepper');
        cy.get('.ng-star-inserted').contains ('Step content #1');
        cy.get("button[type='submit'][aria-disabled='false']").contains('next').click();
        cy.get('[class="step ng-star-inserted completed"]').contains('First step');
        cy.get('.ng-star-inserted').contains ('Step content #2');
        cy.get("button[type='submit'][aria-disabled='false']").contains('next').click();
        cy.get('[class="step ng-star-inserted completed"]').contains('Second step');
        cy.get('.ng-star-inserted').contains ('Step content #3');
        cy.get("button[type='submit'][aria-disabled='false']").contains('next').click();
        cy.get('[class="step ng-star-inserted completed"]').contains('Third step');
        cy.get('.ng-star-inserted').contains ('Step content #4');

    })

  it.only('page object', () => {
    stepperPage.visit();
    stepperPage.firstStepperBlockText('Step content #1');
    stepperPage.firstStepperBlockNextButtonClick();
    stepperPage.firstStepperContainsStep('First step');
    stepperPage.firstStepperBlockText('Step content #2');
    stepperPage.firstStepperBlockNextButtonClick();
    stepperPage.firstStepperContainsStep('Second step');
    stepperPage.firstStepperBlockText('Step content #3');
    stepperPage.firstStepperBlockNextButtonClick();
    stepperPage.firstStepperContainsStep('Third step');
    stepperPage.firstStepperBlockText('Step content #4');

  })

})
