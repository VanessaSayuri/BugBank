describe('register', ()=> {

    context('when I submit the form', ()=>{

        it('must register successfully', ()=>{
            const user ={
                email: 'qualityassurance@yahoo.com',
                password: 'qa123',
                nome: 'Quality Assurance'
            }

            cy.visit('https://bugbank.netlify.app/')
            

            // cy.get('.card__register > form > div > input[placeholder="Informe seu e-mail"]').type(user.email);
            // cy.get('.card__login > form > div> .login__password > div > input[placeholder="Informe sua senha"]').type(user.password);
            cy.get('.card__login > form > div > input[placeholder="Informe seu e-mail"]').type(user.email);

            cy.get('.card__login > form > div> div > input[placeholder="Informe sua senha"]').type(user.password);
            cy.contains('button', 'Registrar').click();
            cy.wait(1000)

            cy.get('.card__register > form > div > input[placeholder="Informe seu e-mail"]')
                .should('not.be.visible').type(user.email, {force:true})

            cy.get('.card__register > form > div > input[placeholder="Informe seu Nome"]')
                .should('not.be.visible').type(user.nome, {force:true})
            
            cy.get('.card__register > form > div > div > input[placeholder="Informe sua senha"]')
                .should('not.be.visible').type(user.password, {force:true})
            
            cy.get('.card__register > form > div > div > input[placeholder="Informe a confirmação da senha"]')
                .should('not.be.visible').type(user.password, {force:true})

            cy.get('#toggleAddBalance').should('not.be.visible').click({force:true})
            
            cy.contains('button','Cadastrar').click({force:true})

            cy.contains('#modalText',' foi criada com sucesso').should('be.visible')
            cy.contains('#btnCloseModal', 'Fechar').should('be.visible').click()

        })

    })
})