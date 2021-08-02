import formsPage from '../pages/formsPage'
import layoutsPage from '../pages/layoutsPage';

it.only('Test3', () => {
  formsPage.visit()
  layoutsPage.basicFormEmail()
  layoutsPage.basicFormPassword()
  layoutsPage.checkMeOutButton()
  layoutsPage.submitButton3()
})
