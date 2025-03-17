import FileUploadPage from "../page/FileUploadPage"
describe('template spec', () => {
    it('passes', () => {
      FileUploadPage.visit()
      FileUploadPage.ClickButton()
      FileUploadPage.ValidateButton()
    })
  })