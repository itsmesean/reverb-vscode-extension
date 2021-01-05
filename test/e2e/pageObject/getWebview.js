export const getWebview = (iFrameParentLocator, iFrameNestedLocator) => {
    return findIndex(iFrameParentLocator, iFrameNestedLocator);
};

const findIndex = (iFrameParentLocator, iFrameNestedLocator) => {
    return findNestedIFrameBody(iFrameParentLocator, iFrameNestedLocator)
        .find('#index')
        .as('index');
};

const findNestedIFrameBody = (iFrameParentLocator, iFrameNestedLocator) => {
    return getIFrameBody(iFrameParentLocator)
        .find('iframe' + iFrameNestedLocator)
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap);
};

const getIFrameBody = (parent) => {
    return cy
        .get('iframe' + parent)
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap);
};
