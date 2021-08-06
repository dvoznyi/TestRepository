import formsPage from '../pages/formsPage'
import layoutsPage from '../pages/layoutsPage';

it.only('Test2', () => {
  formsPage.visit()
  layoutsPage.usingTheGridEmail('Vasyl@gmail.com')
  layoutsPage.passwordUsingTheGrid('148833')
  layoutsPage.radioButtonUsingTheGrid()
  layoutsPage.submitButton2()
})
