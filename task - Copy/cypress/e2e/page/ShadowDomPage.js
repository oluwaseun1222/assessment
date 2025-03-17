class ShadowDomPage {
    visit () {
        cy.visit('https://www.uitestingplayground.com/')
    }

    ClickButton () {
        cy.get(':nth-child(5) > :nth-child(2) > h3 > a').click()
    }

    GenerateGUID () {
      cy.get("guid-generator") // Shadow host element
      .shadow()
      .find("#buttonGenerate") // Correct ID from your HTML
      .click();
    }

    CopyGeneratedGUID () {
        cy.get("guid-generator")
    .shadow()
    .find("#editField") // Using correct input field selector
    .invoke("val")
    .as("generatedGUID");
    // Click the 'Copy to Clipboard' button inside Shadow DOM
    cy.get("guid-generator")
    .shadow()
    .find("#buttonCopy") // Correct selector for copy button
    .click();
    }

    RetriveCopiedGUIDFromClipBoard () {
        cy.window().then((win) => {
            win.navigator.clipboard.readText().then((clipboardText) => {
              cy.log("Clipboard Value:", clipboardText); // Debugging log
              cy.get("@generatedGUID").should("eq", clipboardText);
            });
          });
    }



}

export default new ShadowDomPage