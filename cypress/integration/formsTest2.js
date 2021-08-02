import formsPage from '../pages/formsPage'
import layoutsPage from '../pages/layoutsPage';

it.only('Test2', () => {
  formsPage.visit()
  layoutsPage.usingTheGridEmail()
  layoutsPage.passwordUsingTheGrid()
  layoutsPage.radioButtonUsingTheGrid()
  layoutsPage.submitButton2()
})
