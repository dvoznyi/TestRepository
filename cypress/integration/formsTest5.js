import formsPage from '../pages/formsPage'
import layoutsPage from '../pages/layoutsPage';

it.only('Test5', () => {
  formsPage.visit()
  layoutsPage.blockFormName('Vasya')
  layoutsPage.blockFormSurname('Sidorenko')
  layoutsPage.blockFormEmail('Vasya@gmai.com')
  layoutsPage.websiteButton('pornhub.com')
  layoutsPage.blockFormSubmit()
})
