import '@testing-library/cypress/add-commands';

Cypress.Commands.add('iframe', (selector, element) => {
    return cy
        .get(`iframe${selector || ''}`, { timeout: 10000 })
        .should(($iframe) => {
            expect($iframe.contents().find(element || 'body')).to.exist;
        })
        .then(($iframe) => {
            const w = cy.wrap($iframe.contents().find('body'));
            w.invoke('addClass', 'cypress');
            return w;
        });
});
