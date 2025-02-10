it('grudges', () => {
    cy.contains(/add some grudges/i)

    cy.getDataTest('grudge-list-title').within(() => {
        cy.get('li').should('have.length', 0)
    })

    cy.get('clear-button').should('not.exist')

    cy.getDataTest('grudge-test-title').should('have.text', 'Add Some Grudges')

    cy.getDataTest('grudge-input').within(() => {
        cy.get('input').type('some grudge')
    })
    cy.getDataTest('add-grudge-button').click()
    cy.getDataTest('grudge-list').within(() => {
        cy.get('li').should('have.length', 1)
    })

    cy.getDataTest('grudge-test-title').should('have.text', 'Grudges')

    cy.getDataTest('grudge-input').within(() => {
        cy.get('input').type('another grudge')
    })
    cy.getDataTest('add-grudge-button').click()
    cy.getDataTest('grudge-list').within(() => {
        cy.get('li').should('have.length', 2)
        cy.get('li').its(0).should('contains.text', 'some grudge')
    })

    cy.getDataTest('grudge-list').within(() => {
        cy.get('li').its(0).within(() => {
            cy.get('button').click()
        })
    })
    cy.get('li').should('have.length', 1)

    cy.getDataTest('clear-button').click()
    cy.getDataTest('grudge-list').within(() => {
        cy.get('li').should('have.length', 0)
    })
    
})