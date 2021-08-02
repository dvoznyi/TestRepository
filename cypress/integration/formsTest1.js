import formsPage from '../pages/formsPage'
import layoutsPage from '../pages/layoutsPage';

it.only('Test1', () => {
  formsPage.visit();
  layoutsPage.inlineFormName()
  layoutsPage.inLineFormEmail()
  layoutsPage.rememberMeButton()
  layoutsPage.submitButton1() // не работает этот шаг, нужно написать другой локатор
})
