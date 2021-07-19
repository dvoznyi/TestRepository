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
    cy.get("button[type='submit'][aria-disabled='false']").contains('next').click();
  }

}
export default new StepperPage();
