beforeEach(() => {
    cy.visit("/")
})

describe ("Operation", () => {
    /**
     * gherkin
     * Scenario: Should add two numbers
     *  When the user click on the number "2" button
     *  Then the number "2" should be displayed on the screen
     *  When the user click on the operator "+" button
     *  Then the "2+" should be displayed on the screen
     *  When the user click on the number "2" button
     *  Then the "2+2" should be displayed on the screen
     *  When the user click on the operator "=" button
     *  Then the result should be "4"
     */
    
    it("should add two numbers", () => {
        cy.get("[data-test='2']").should("be.visible").click() // The user click on the number "2" button

        cy.get("[data-test='results']").should("have.value", "2") // Check if the number "2" is displayed on the screen

        cy.get("[data-test='+']").should("be.visible").click() // The user click on the operator "+" button

        cy.get("[data-test='results']").should("have.value", "2+") // Check if the "2+" is displayed on the screen

        cy.get("[data-test='2']").should("be.visible").click() // The user click on the number "2" button

        cy.get("[data-test='results']").should("have.value", "2+2") // Check if the "2+2" is displayed on the screen

        cy.get("[data-test='=']").should("be.visible").click() // The user click on the operator "=" button

        cy.get("[data-test='results']").should("have.value", "4") // Check if the result is "4"
        


    })
       /**
     * gherkin
     * Scenario: Should Subtract two numbers
     *  When the user click on the number "5" button
     *  Then the number "5" should be displayed on the screen
     *  When the user click on the operator "-" button
     *  Then the "5-" should be displayed on the screen
     *  When the user click on the number "2" button
     *  Then the "5-2" should be displayed on the screen
     *  When the user click on the operator "=" button
     *  Then the result should be "3"
     */

         it("should subtract two numbers", () => {
            cy.get("[data-test='5']").should("be.visible").click() // The user click on the number "5" button

            cy.get("[data-test='results']").should("have.value", "5") // Check if the number "5" is displayed on the screen

            cy.get("[data-test='-']").should("be.visible").click() // The user click on the operator "-" button

            cy.get("[data-test='results']").should("have.value", "5-") // Check if the "5-" is displayed on the screen

            cy.get("[data-test='2']").should("be.visible").click() // The user click on the number "2" button

            cy.get("[data-test='results']").should("have.value", "5-2") // Check if the "5-2" is displayed on the screen

            cy.get("[data-test='=']").should("be.visible").click() // The user click on the operator "=" button

            cy.get("[data-test='results']").should("have.value", "3") // Check if the result is "3"

         })

                 /**
     * gherkin
     * Scenario: Should Divide two numbers
     *  When the user click on the number "4" button
     *  Then the number "4" should be displayed on the screen
     *  When the user click on the operator "/" button
     *  Then the "4/" should be displayed on the screen
     *  When the user click on the number "2" button
     *  Then the "4/2" should be displayed on the screen
     *  When the user click on the operator "=" button
     *  Then the result should be "2"
     */

             it("should divide two numbers", () => {
                cy.get("[data-test='4']").should("be.visible").click() // The user click on the number "4" button
    
                cy.get("[data-test='results']").should("have.value", "4") // Check if the number "4" is displayed on the screen
    
                cy.get("[data-test='/']").should("be.visible").click() // The user click on the operator "/" button
    
                cy.get("[data-test='results']").should("have.value", "4/") // Check if the "4/" is displayed on the screen
    
                cy.get("[data-test='2']").should("be.visible").click() // The user click on the number "2" button
    
                cy.get("[data-test='results']").should("have.value", "4/2") // Check if the "4/2" is displayed on the screen
    
                cy.get("[data-test='=']").should("be.visible").click() // The user click on the operator "=" button
    
                cy.get("[data-test='results']").should("have.value", "2") // Check if the result is "2"
    
             })
    
                 /**
     * gherkin
     * Scenario: Should Multiply two numbers
     *  When the user click on the number "2" button
     *  Then the number "4" should be displayed on the screen
     *  When the user click on the operator "*" button
     *  Then the "2*" should be displayed on the screen
     *  When the user click on the number "6" button
     *  Then the "2*6" should be displayed on the screen
     *  When the user click on the operator "=" button
     *  Then the result should be "12"
     */

                    it("should multiply two numbers", () => {
                    cy.get("[data-test='2']").should("be.visible").click() // The user click on the number "2" button
            
                    cy.get("[data-test='results']").should("have.value", "2") // Check if the number "2" is displayed on the screen
            
                    cy.get("[data-test='*']").should("be.visible").click() // The user click on the operator "*" button
            
                    cy.get("[data-test='results']").should("have.value", "2*") // Check if the "2*" is displayed on the screen
            
                    cy.get("[data-test='6']").should("be.visible").click() // The user click on the number "6" button
            
                    cy.get("[data-test='results']").should("have.value", "2*6") // Check if the "2*6" is displayed on the screen
            
                    cy.get("[data-test='=']").should("be.visible").click() // The user click on the operator "=" button
            
                    cy.get("[data-test='results']").should("have.value", "12") // Check if the result is "12"
            
                    })
            
                })