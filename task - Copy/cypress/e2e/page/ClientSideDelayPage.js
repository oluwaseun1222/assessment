class ClientSideDelayPage {
    visit() {
        cy.visit('https://www.uitestingplayground.com/'); // Adjust the URL based on the website
    }
  
    clickButton() {
        cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
        cy.get('#ajaxButton').click()
    }
  
    verifyResponse() {
        cy.wait(15000)
        cy.get('.bg-success').should("contain", "Data calculated on the client side")
    }
  }
  
  export default new ClientSideDelayPage();
  