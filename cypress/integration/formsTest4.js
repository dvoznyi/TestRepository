import formsPage from '../pages/formsPage'
import layoutsPage from '../pages/layoutsPage';

it.only('Test4', () => {
  formsPage.visit()
  layoutsPage.recipients()
  layoutsPage.subject()
  layoutsPage.message()
  layoutsPage.formWithoutLabelsSend()
})
