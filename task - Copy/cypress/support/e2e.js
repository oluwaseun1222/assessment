// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// You can add global custom commands here if needed.

// Alternatively you can use CommonJS syntax:
// require('./commands')

import 'cypress-file-upload';


Cypress.Commands.add("getIframeBody", (iframeSelector) => {
    // Wait for the iframe to load, then wrap its body
    return cy
      .get(iframeSelector)
      .its("0.contentDocument.body").should("not.be.empty")
      .then(cy.wrap);
  });
  
