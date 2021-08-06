import formsPage from '../pages/formsPage'
import layoutsPage from '../pages/layoutsPage';

it.only('Test3', () => {
  formsPage.visit()
  layoutsPage.basicFormEmail('Vasya@gmail.com')
  layoutsPage.basicFormPassword('148833')
  layoutsPage.checkMeOutButton()
  layoutsPage.submitButton3()
})
