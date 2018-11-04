// https://docs.cypress.io/api/introduction/api.html

describe('TodoList Vue Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('div', 'Add')
  })
})
