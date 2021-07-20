class StepperPage {
  visit() {
    cy.visit('/pages/layout/stepper')
  }

  firstStepperBlock(){
    return cy.get('.ng-star-inserted')
  }

  firstStepperBlockText(text){
    return cy.get('.ng-star-inserted').contains(text)
  }
  firstStepperBlockNextButtonClick() {
    return cy.get("button[type='submit'][aria-disabled='false']").contains('next').click();
  }
  firstStepperContainsStep(text){
    return cy.get('[class="step ng-star-inserted completed"]').contains(text);

  }

}
export default new StepperPage();
