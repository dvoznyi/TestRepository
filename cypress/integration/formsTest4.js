import formsPage from '../pages/formsPage'
import layoutsPage from '../pages/layoutsPage';

it.only('Test4', () => {
  formsPage.visit()
  layoutsPage.recipients('vasya')
  layoutsPage.subject('test')
  layoutsPage.message('test1')
  layoutsPage.formWithoutLabelsSend()
})
