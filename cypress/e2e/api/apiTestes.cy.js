import { loginApi } from "../../support/gui_commands.js"
import { addProductApi } from "../../support/gui_commands.js"

describe('ServerRest API Testes', () => {

    it('Cadastra um novo usuario via API', () => {
        cy.cadastrarUsuario().then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq('Cadastro realizado com sucesso')
            expect(response.body._id).to.not.be.empty;
            cy.log(JSON.stringify(response.body));
        });   
    });
    it('Login admin via API', () => {
        cy.loginApi().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq('Login realizado com sucesso')
            expect(response.body.authorization).to.not.be.empty;
            Cypress.env('token',response.body.authorization)
            cy.log(JSON.stringify(response.body));
        });
    });

    it('Cria um produto via API', () => {
        cy.addProductApi().then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq('Cadastro realizado com sucesso')
            expect(response.body._id).to.not.be.empty;
            cy.log(JSON.stringify(response.body));
        });
    });

    it('Cadastra Carrinho via API', () => {
        cy.cadastrarCarrinhoApi().then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq('Cadastro realizado com sucesso')
            expect(response.body._id).to.not.be.empty;
            cy.log(JSON.stringify(response.body));
        });
    });
});