// write tests here
describe('User Onboarding Test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const tosInput = () => cy.get('[type="checkbox"]')
    const submitBtn = () => cy.get('#submitBtn')
    const errors = () => cy.get('.errors')

    it('Get name input, type a name, check if name input contains name', () => {
        nameInput().type('Olivia')
        nameInput().should('have.value', 'Olivia')
    })

    it('Get email input and type an email address', () => {
        emailInput().type('test@test.com')
        emailInput().should('have.value', 'test@test.com')
    })

    it('Get password input and type a password', () => {
        passwordInput().type('password')
        passwordInput().should('have.value', 'password')
    })

    it('Check to see if user can check TOS checkbox', () => {
        tosInput().should('exist')
        tosInput().check()
    })

    it('Check if a user can submit the form data', () => {
        submitBtn().should('exist')
        nameInput().type('Olivia')
        emailInput().type('test@test.com')
        passwordInput().type('password')
        tosInput().check()
        submitBtn().click()
    })

    it('Check for form validation if an input is left empty', () => {
        // Name input validation error
        nameInput().type('Ol')
        nameInput().type('{backspace}{backspace}')
        errors().contains('Name is required')

        // Email input validation error
        emailInput().type('o')
        emailInput().type('{backspace}')
        errors().contains('Email is required')

        // Password input validation error
        passwordInput().type('o')
        passwordInput().type('{backspace}')
        errors().contains('Password is required')

        // Terms of service checkbox validation error
        tosInput().check()
        tosInput().uncheck()
        errors().contains('You must accept Terms and Conditions')
    })

    it('Form returns to original state', () => {
        nameInput()
        emailInput()
        passwordInput()
        tosInput()
    })

})