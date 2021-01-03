import CommandPalette from '../pageObject/CommandPalette';
import { getWebviewIndex } from '../pageObject/OpenFile';

context('reVerb Extension', () => {
    before(() => {
        cy.visit('/');
        cy.wait(7000);
        CommandPalette.executeCommand();
        cy.wait(1000);
        getWebviewIndex('.webview', '#active-frame');
    });

    it('Should open webview', () => {
        cy.get('@index').within(() => {
            cy.get('.valid__port').should('not.exist');
            cy.get('.input__port').type('1234');
            cy.get('.button__send').click();
            cy.get('.valid__port').should('exist');
        });
    });
});
