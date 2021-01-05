import CommandPalette from '../pageObject/CommandPalette';
import { getWebview } from '../pageObject/getWebview';

context('reVerb Extension', () => {
    before(() => {
        cy.visit('/');
        CommandPalette.executeCommand();
    });

    beforeEach(() => {
        getWebview('.webview', '#active-frame');
    });

    it('Should open webview', () => {
        cy.get('@index').within(() => {
            cy.contains('Welcome to reVerb!').should('exist');
            cy.get('.select__path').should('exist');
            cy.get('.input__port').should('exist');
            cy.get('.button__send').should('exist');
        });
    });

    it('Should accept user input', () => {
        cy.get('@index').within(() => {
            cy.get('.select__path')
                .select('express-test/server1/index.js')
                .should('have.value', '/express-test/server1/index.js');
            cy.get('.valid__port').should('not.exist');
            cy.get('.input__port').click().type('1234');
            cy.get('.button__send').click();
            cy.get('.valid__port').should('exist');
        });
    });
});
