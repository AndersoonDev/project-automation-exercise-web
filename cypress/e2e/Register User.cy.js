/// <reference types='cypress' />

describe('Registrar Usuário', () => {
  it('Deve registrar um novo usuário', () => {
    cy.visit('http://automationexercise.com')

    cy.url().should('be.equal', 'https://automationexercise.com/')
    cy.get('[href="/login"]').click()
    cy.get('[href="/login"]').should('exist')
    cy.get('[type="text"]').type('Anderson')
    cy.get('[action="/signup"] > [type="email"]').type('teste@teste.com')
  })
})