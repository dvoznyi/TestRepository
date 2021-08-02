import formsPage from '../pages/formsPage'
import layoutsPage from '../pages/layoutsPage';

it.only('Test6', () => {
  formsPage.visit()
  layoutsPage.horizontalFormEmail()
  layoutsPage.horizontalFormPassword()
  layoutsPage.horizontalFormRememberMe()
  layoutsPage.horizontalFormSignIn()
})
