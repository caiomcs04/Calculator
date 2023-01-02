describe('Examples', () => {
    it('Selectors examples', () => {
        cy.visit('http://localhost:8080/login');

        // Get the selector by an unique propriety
        cy.get('input[name="username"]').should('be.visible').type('admin')

        // We can reach some elements aswell by it sibling
        cy.contains('span', 'Password').siblings('input').should('be.visible').type('changeme')

        // Or it parent
        cy.get('form').first().should('be.visible').within(() => {
            cy.get('button').should('be.visible').click()
        })

        // On contains get the selector checking some HTML info it have
        cy.contains('h2', 'Welcome Aboard, ').should('be.visible')

        cy.visit('http://localhost:8080/dashboards')

        // Or we can create or data-test propriety to make this selector unique
        cy.get('[data-test="toolbar-actions"]').should('be.visible').click()

    });
})