import formsPage from '../pages/formsPage'
import layoutsPage from '../pages/layoutsPage';

it.only('Test5', () => {
  formsPage.visit()
  layoutsPage.blockFormName()
  layoutsPage.blockFormSurname()
  layoutsPage.blockFormEmail()
  layoutsPage.websiteButton()
  layoutsPage.blockFormSubmit()
})
