import SampleAppPage from "../page/SampleAppPage"
describe('LOGIN', () => {
    it('Login Validation', () => {
      SampleAppPage.visit()
      SampleAppPage.BeforeLogginIn()
      SampleAppPage.AfterLogginIn()
    })
  })