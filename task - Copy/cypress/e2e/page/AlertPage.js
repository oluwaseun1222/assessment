class AlertPage {
    visit () {
        cy.visit('https://www.uitestingplayground.com/')
    }

    ClickButton () {
        cy.get(':nth-child(5) > :nth-child(3) > h3 > a').click()
    }

    VerifyAlertResponse () {
        cy.get('#alertButton').click()
      cy.get('#confirmButton').click()
      cy.get('#promptButton').click()
    }
}
export default new AlertPage()