class FileUploadPage {

    visit () {
        cy.visit('https://www.uitestingplayground.com/')
    }

    ClickButton () {
        cy.get(':nth-child(5) > :nth-child(4) > h3 > a').click()
    }

    ValidateButton () {
        const fileName = "example.txt"; 
        cy.getIframeBody("iframe")
      .find("#browse")
      .attachFile(fileName, { force: true, allowEmpty: true });

    }
}

export default new FileUploadPage