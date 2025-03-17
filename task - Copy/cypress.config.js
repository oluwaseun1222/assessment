const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // You can optionally set your baseUrl here if needed
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
  },
});
