import ClientSideDelayPage from "../page/ClientSideDelayPage"
describe("Client Side Delay Test", () => {
  it("verifies the client side delay message", () => {
    ClientSideDelayPage.visit()
    ClientSideDelayPage.clickButton()
    ClientSideDelayPage.verifyResponse()

    
  })
})