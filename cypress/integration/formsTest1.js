import formsPage from '../pages/formsPage'
import layoutsPage  from '../pages/layoutsPage';
it.only('Test1', ()  => {
formsPage.visit();
//cy.get("input[placeholder='Jane Doe']").type('Vasya')
layoutsPage.inlineFormName()
//cy.get("input[placeholder='Email'][type='text'").type('Petrovich@gmail.com')
layoutsPage.inLineFormEmail()
//cy.get('.text').contains ('Remember me').click()
layoutsPage.rememberMeButton()
//cy.get("button[ng-reflect-status='primary'][type='submit']").click({ multiple: true })
layoutsPage.submitButton1()
})
