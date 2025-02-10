describe('Various examples', () => {
    beforeEach(()=> {
        cy.visit('/examples')
    })
    it('Multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click()
        cy.location('pathname').should('equal', '/')

        cy.getDataTest('nav-overview').click()
        cy.location('pathname').should('equal', '/overview')

        cy.getDataTest('nav-fundamentals').click()
        cy.location('pathname').should('equal', '/fundamentals')

        cy.getDataTest('nav-component').click()
        cy.location('pathname').should('equal', '/component')

        cy.getDataTest('nav-best-practices').click()
        cy.location('pathname').should('equal', '/best-practices')

   
    })
})