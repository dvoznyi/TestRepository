class layoutsPage {
    inlineFormNameFill(name){
        return cy.get("input[placeholder='Jane Doe']").type(name)
    }
    inLineFormEmail(email){
        return  cy.get("input[placeholder='Email'][type='text'").type(email)
    }
    rememberMeButton(){
        return cy.get('.text').contains ('Remember me').click()
    }
    submitButton1(){
        return cy.get('[class="form-inline"]').find("button[status='primary'][type='submit']").click()
    }
    usingTheGridEmail(email){
        return cy.get("input[data-cy='imputEmail1']").type(email)
    }
    passwordUsingTheGrid(password){
        return cy.get("input[id='inputPassword2']").type(password)
    }
    radioButtonUsingTheGrid(){
        return cy.get('.text').contains('Option 1').click()
    }
    submitButton2(){
        return cy.get("button[ng-reflect-status='primary'][type='submit']").contains('Sign in').click()
    }
    basicFormEmail(email){
        return cy.get("input[id='exampleInputEmail1']").type(email)
    }
    basicFormPassword(password){
        return cy.get("input[id='exampleInputPassword1'").type(password)
    }
    checkMeOutButton(){
        return cy.get('.text').contains('Check me out').click()
    }
    submitButton3(){
        return cy.get("button[status='danger'][type='submit']").click()
}
    recipients(text){
        return cy.get("input[placeholder='Recipients'").type(text)
    }
    subject(text){
        return cy.get("input[placeholder='Subject'").type(text)
    }
    message(text){
        return cy.get("textarea[placeholder='Message'").type(text)
    }
    formWithoutLabelsSend(){
        return cy.get("button[status='success'][type='submit']").click()
    }
    blockFormName(name){
        return cy.get("input[placeholder='First Name'").type(name)
    }
    blockFormSurname(name){
        return cy.get("input[placeholder='Last Name'").type(name)
    }
    blockFormEmail(email){
        return cy.get("input[id='inputEmail']").type(email)
    }
    websiteButton(text){
        return cy.get("input[placeholder='Website'").type(text)
    }
    blockFormSubmit(){
        return cy.get("button[type='submit']").contains('Submit').click()
    }
    horizontalFormEmail(email){
        return cy.get("input[id='inputEmail3']").type(email)
    }
    horizontalFormPassword(password){
        return cy.get("input[id='inputPassword3']").type(password)
    }
    horizontalFormRememberMe(){
        return cy.get('[class="form-horizontal"]').find('[class="custom-checkbox"]').click()
    }
    horizontalFormSignIn(){
        return cy.get("button[status='warning'][type='submit']").click()
    }
}
export default new layoutsPage();