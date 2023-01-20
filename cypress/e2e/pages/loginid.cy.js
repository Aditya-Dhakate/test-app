export class loginid{
    
    enterEmail(useremail){
        cy.get('#user_email').type(useremail)
    }

    enterPassword(passw){
        cy.get('#user_password').type(passw)
    }
    clickOnLogin(){
        cy.get('.btn').click()
    }

}