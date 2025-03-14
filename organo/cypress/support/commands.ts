/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    getByDataTest(element: string): Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.Commands.add("getByDataTest", (element: string) => {
  return cy.get(`[data-test="${element}"]`);
});
