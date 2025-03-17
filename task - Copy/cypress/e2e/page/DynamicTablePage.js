class DynamicTablePage {
    visit () {
        cy.visit('https://www.uitestingplayground.com/')

    }
    ClickButton () {
        cy.get(':nth-child(3) > :nth-child(2) > h3 > a').click()
    }

    CompareChromeCPUValuetoTableValue () {
        cy.get('[role="table"]', { timeout: 10000 }).should("be.visible");

    // Find the cell that contains "Chrome" (using a case-insensitive regex)
    cy.contains('[role="cell"]', /chrome/i, { timeout: 10000 })
      .parents('[role="row"]')
      .then(($row) => {
        // In that row, find the cell containing the CPU load (assumed to include '%')
        const cpuCell = Cypress._.find($row.find('[role="cell"]'), (cell) =>
          cell.innerText.includes('%')
        );
        expect(cpuCell, "CPU load cell exists").to.exist;
        const tableCpuLoad = parseFloat(cpuCell.innerText.replace('%', '').trim());
        cy.log("Chrome CPU load from table: " + tableCpuLoad);

        // Get the yellow label value that contains the CPU load
        cy.get(".bg-warning")
          .invoke("text")
          .then((labelText) => {
            // Extract the numeric value from the label text
            const match = labelText.match(/([\d.]+)/);
            const labelCpuLoad = match ? parseFloat(match[1]) : NaN;
            cy.log("Chrome CPU load from yellow label: " + labelCpuLoad);

            // Compare the two values with a tolerance of 1 (adjust as needed)
            expect(tableCpuLoad).to.be.closeTo(labelCpuLoad, 1);
          });
      });
    }
}
export default new DynamicTablePage