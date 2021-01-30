const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Credencials', () => {
  it('should generate an api_key', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()
    cy.get('#modal-login')

    cy.get('#email-field').type('thais@thais.me')
    cy.get('#password-field').type('123456')
    cy.get('#submit-button').click()

    cy.wait(4000)

    cy.visit(`${APP_URL}/credencials`)
    cy.wait(2000)

    const oldApiKey = cy.get('#apikey').invoke('text')

    cy.get('#generate-apikey').click()
    cy.wait(2000)
    const newApikey = cy.get('#apikey').invoke('text')

    expect(oldApiKey).to.not.equal(newApikey)
  })
})
