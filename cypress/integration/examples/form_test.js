// write tests here
describe('User Onboarding Test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name="name"]')

    it('Get name input and type a name', () => {
        nameInput().should('exist')
        nameInput().type('Olivia')
    })

    it('Check if text input contains the name provided', () => {

    })

    it('Get email input and type an email address', () => {

    })

    it('Get password input and type a password', () => {

    })

    it('Check to see if user can check TOS checkbox', () => {

    })

    it('Check if a user can submit the form data', () => {

    })

    it('Check for form validation if an input is left empty', () => {
        
    })

})