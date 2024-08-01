// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('criarUsuarioParaLogin', () => {
    cy.url().should('be.equal', 'https://automationexercise.com/')
    cy.get('[href="/login"]').click()
    cy.get('.login-form > h2').should('contain', 'Login to your account')
    cy.get('[type="text"]').type('Anderson')
    cy.get('[action="/signup"] > [type="email"]').type('automation@qa.com.br')
    cy.get('[action="/signup"] > .btn').click()
    cy.get(':nth-child(1) > b').should('contain', 'Enter Account Information')
    cy.get('#id_gender1').click()
    cy.get('#name').clear().type('Anderson')
    cy.get('#password').clear().type('teste@teste')
    cy.get('#days').select('14')
    cy.get('#months').select('November')
    cy.get('#years').select('1987')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('#first_name').clear().type('Anderson')
    cy.get('#last_name').clear().type('Silva')
    cy.get('#address1').type('Av. Paulista')
    cy.get('#country').select('India')
    cy.get('#state').type('São Paulo')
    cy.get('#city').type('São Paulo')
    cy.get('#zipcode').type('02161-020')
    cy.get('#mobile_number').type('11991910000')
    cy.get('[action="/signup"] > .btn').click()

    cy.get('b').should('have.text', 'Account Created!')
    cy.get('.pull-right > .btn').click()
    cy.get(':nth-child(10) > a').should('contain', 'Logged')
    cy.get('[href="/logout"]').click()
  });