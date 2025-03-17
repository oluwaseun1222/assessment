import AlertPage from "../page/AlertPage"
describe('Alert verification test', () => {
    it('verifying various alert reponses', () => {
      AlertPage.visit()
      AlertPage.ClickButton()
      AlertPage.VerifyAlertResponse()
    })
  })