class SampleAppPage {
    visit () {
        cy.visit('https://www.uitestingplayground.com/')
    }

    BeforeLogginIn () {
        cy.get(':nth-child(4) > :nth-child(2) > h3 > a').click()
      
      cy.get('#loginstatus').should("contain", "User logged out.")

      cy.get('input[placeholder="User Name"]').type('oluwaseun');
cy.get('input[placeholder="********"]').type('pwd')
 cy.get('#login').click()
    }

    AfterLogginIn () {
        cy.get('#loginstatus').should("contain", "Welcome, oluwaseun!")
    }
}
export default new SampleAppPage