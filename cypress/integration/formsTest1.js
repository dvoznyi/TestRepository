import formsPage from '../pages/formsPage'
import layoutsPage from '../pages/layoutsPage';

it.only('Test1', () => {
  formsPage.visit();
  layoutsPage.inlineFormNameFill('Vasya')
  layoutsPage.inLineFormEmail('vasyl@gmai.com')
  layoutsPage.rememberMeButton()
  layoutsPage.submitButton1() // не работает этот шаг, нужно написать другой локатор
})
