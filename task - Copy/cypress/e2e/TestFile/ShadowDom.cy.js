import ShadowDomPage from "../page/ShadowDomPage"
describe('Generate GUID', () => {
    it('Validate Copied GUID', () => {

      ShadowDomPage.visit()
      ShadowDomPage.ClickButton()
      ShadowDomPage.GenerateGUID()
      ShadowDomPage.CopyGeneratedGUID()
      ShadowDomPage.RetriveCopiedGUIDFromClipBoard()

    })
  })