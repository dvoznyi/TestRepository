import formsPage from '../pages/formsPage'
import layoutsPage from '../pages/layoutsPage';
import creds from '../fixtures/credentials.json';

it.only('Test6', () => {
  formsPage.visit()
  layoutsPage.horizontalFormEmail(creds.email)
  layoutsPage.horizontalFormPassword(creds.password)
  layoutsPage.horizontalFormRememberMe()
  layoutsPage.horizontalFormSignIn()
})
