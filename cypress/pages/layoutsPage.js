class layoutsPage {
    inlineFormName(){
        return cy.get("input[placeholder='Jane Doe']").type('Vasya')
    }
    inLineFormEmail(){
        return  cy.get("input[placeholder='Email'][type='text'").type('Petrovich@gmail.com')
    }
    rememberMeButton(){
        return cy.get('.text').contains ('Remember me').click()
    }
    submitButton1(){
        return cy.get("button[ng-reflect-status='primary'][type='submit']").click({ multiple: true })
    }
    usingTheGridEmail(){
        return cy.get("input[data-cy='imputEmail1']").type('Vasyl1488@gmail.com')
    }
    passwordUsingTheGrid(){
        return cy.get("input[id='inputPassword2']").type('14881933')
    }
    radioButtonUsingTheGrid(){
        return cy.get('.text').contains('Option 1').click()
    }
    submitButton2(){
        return cy.get("button[ng-reflect-status='primary'][type='submit']").contains('Sign in').click()
    }
    basicFormEmail(){
        return cy.get("input[id='exampleInputEmail1']").type('Petrovich@gmail.com')
    }
    basicFormPassword(){
        return cy.get("input[id='exampleInputPassword1'").type('14881933')
    }
    checkMeOutButton(){
        return cy.get('.text').contains('Check me out').click()
    }
    submitButton3(){
        return cy.get("button[status='danger'][type='submit']").click()
}
    recipients(){
        return cy.get("input[placeholder='Recipients'").type('1488')
    }
    subject(){
        return cy.get("input[placeholder='Subject'").type('1488')
    }
    message(){
        return cy.get("textarea[placeholder='Message'").type('1488')
    }
    formWithoutLabelsSend(){
        return cy.get("button[status='success'][type='submit']").click()
    }
    blockFormName(){
        return cy.get("input[placeholder='First Name'").type('Vasya')
    }
    blockFormSurname(){
        return cy.get("input[placeholder='Last Name'").type('Petrov')
    }
    blockFormEmail(){
        return cy.get("input[id='inputEmail']").type('Petrovich@gmail.com')
    }
    websiteButton(){
        return cy.get("input[placeholder='Website'").type('pornhub.com')
    }
    blockFormSubmit(){
        return cy.get("button[type='submit']").contains('Submit').click()
    }
    horizontalFormEmail(){
        return cy.get("input[id='inputEmail3']").type('Petrovich@gmail.com')
    }
    horizontalFormPassword(){
        return cy.get("input[id='inputPassword3']").type('14881933')
    }
    horizontalFormRememberMe(){
        return cy.get('.custom-checkbox').eq(2).click()
    }
    horizontalFormSignIn(){
        return cy.get("button[status='warning'][type='submit']").click()
    }
}
export default new layoutsPage();