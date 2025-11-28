import { addProduto } from "../../support/gui_commands.js"

describe('Front Server Cliente Testes', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login');
        cy.loginUser();
    });

    it('Adcionar Produtos a lista', () => {
        //Faz assertion na pagina inicial
        cy.contains('Serverest Store')
            .should('be.visible');
        //adciona um produto a lista, limpa a lista e volta para pagina inicial
        cy.addProduto();
        cy.contains('Serverest Store')
            .should('be.visible');
    });
});