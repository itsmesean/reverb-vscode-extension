export default class CommandPalette {
    static executeCommand() {
        cy.get('[role="tab"][aria-label="reVerb"] > .action-label').click();
        cy.wait(3000);
        cy.contains('.action-label', 'Open reVerb client').click();
        cy.wait(1000);
        cy.get('[role="tab"][aria-label="reVerb"] > .action-label').click();
        return;
    }
}
