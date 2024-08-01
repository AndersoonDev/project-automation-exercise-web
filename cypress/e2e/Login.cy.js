/// <reference types='cypress' />

describe('Funcionalidade de Login', () => {
    beforeEach(() => {
       cy.visit('http://automationexercise.com')
    });
    it('Deve fazer o login com email e senha corretos', () => {             
        // cy.criarUsuarioParaLogin()
        cy.url().should('be.equal', 'https://automationexercise.com/')
        cy.get('[href="/login"]').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('[action="/login"] > [type="email"]').type('automation@qa.com.br')
        cy.get('[type="password"]').type('teste@teste')
        cy.get('[action="/login"] > .btn').click()
        cy.get(':nth-child(10) > a').should('contain', 'Logged')
        cy.get('[href="/delete_account"]').click()
        cy.get('b').should('have.text', 'Account Deleted!')
        cy.get('.pull-right > .btn').click()
    });

    it('Deve fazer o login com a senha e email incorretos', () => {             
        cy.url().should('be.equal', 'https://automationexercise.com/')
        cy.get('[href="/login"]').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('[action="/login"] > [type="email"]').type('111111@qa.com.br')
        cy.get('[type="password"]').type('111111')
        cy.get('[action="/login"] > .btn').click()
        cy.get('[style="color: red;"]').should('have.text', 'Your email or password is incorrect!')
    });

    it('Deve fazer o login para login', () => {             
        // cy.criarUsuarioParaLogin()
        cy.get('.nav > :nth-child(1) > [href="/"]').click()
        cy.url().should('be.equal', 'https://automationexercise.com/')
        cy.get('[href="/login"]').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('[action="/login"] > [type="email"]').type('automation@qa.com.br')
        cy.get('[type="password"]').type('teste@teste')
        cy.get('[action="/login"] > .btn').click()
        cy.get(':nth-child(10) > a').should('contain', 'Logged')
        cy.get('[href="/logout"]').click()
        cy.url().should('be.equal', 'https://automationexercise.com/login')
    });

    it.only('Registrar um usuário com email existente', () => {
        cy.url().should('be.equal', 'https://automationexercise.com/')
        cy.get('[href="/login"]').click()
        cy.get('[type="text"]').type('Anderson')
        cy.get('[action="/signup"] > [type="email"]').type('automation@qa.com.br')
        cy.get('[action="/signup"] > .btn').click()
        cy.get('[style="color: red;"]').should('have.text', 'Email Address already exist!')
    });
})