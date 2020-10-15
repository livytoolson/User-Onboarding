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

    it('Get name input, type a name, check if name input contains name', () => {
        nameInput().should('exist')
        nameInput().type('Olivia')
        nameInput().should('have.value', 'Olivia')
    })

    it('Get email input and type an email address', () => {
        emailInput().should('exist')
        nameInput().type('test@test.com')
    })

    it('Get password input and type a password', () => {
        passwordInput().should('exist')
        passwordInput().type('password')
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
        
    })

})