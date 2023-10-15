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
        cy.get(':nth-child(14)').click()


    })



    
})


/** 
* gherkin
* Scenario: Should login with a valid user
*   Given there is the following user in the system:
*     | email       | password |
*     | bob@bob.bob | changeme |
*   When the user navigates to the login page
*   And type 'bob@bob.bob' on the email field
*   And type 'changeme' on the password field
*   And clicks the 'ENTRAR' button
*   Then the user should be redirected to the links page
* 
*/