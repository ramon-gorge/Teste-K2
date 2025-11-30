import { loginAdmin } from "../../support/gui_commands.js"
import { loginUser } from "../../support/gui_commands.js"
import { criarAdminUser } from "../../support/gui_commands.js"
import { criarCliente } from "../../support/gui_commands.js"
import { criarProduto } from "../../support/gui_commands.js"

describe('Front Server Admin Testes', () => {
  before(() => {
    cy.cadastrarAdminUser();
  });
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
    cy.loginAdmin()
  });

  afterEach(() => {
    cy.logout()
  });
  
  it('Criar Usuario Admin', () => {
    //Faz assertion na pagina inicial
    cy.contains('Bem Vindo')
      .should('be.visible');
    cy.contains('Cadastrar').click();
    //Chama o comando customizado para criar um usuario admin
    cy.criarAdminUser();
    cy.contains('Lista dos usuários')
      .should('be.visible');
    cy.get('@createdEmail').then((email) => {
        cy.log('Created email: ' + email);
        cy.contains(email)
          .should('be.visible');
    });
  });

  it('Criar Usuario Cliente', () => {
    //Faz assertion na pagina inicial
    cy.contains('Bem Vindo ')
      .should('be.visible');
    cy.contains('Cadastrar').click();
    //Chama o comando customizado para criar um usuario cliente
    cy.criarCliente();
    cy.contains('Lista dos usuários')
      .should('be.visible');
    cy.get('@createdEmail').then((email) => {
        cy.log('Created email: ' + email);
        cy.contains(email)
          .should('be.visible');
    });
  });

  it('Criar Produto', () => {
    //Faz assertion na pagina inicial
    cy.contains('Bem Vindo ')
      .should('be.visible');
    //Chama o comando customizado para criar um produto
    cy.criarProduto();
    cy.contains('Lista dos Produtos')
      .should('be.visible');
    cy.get('@createdProduct').then((product) => {
        cy.log('Created product: ' + product);
        cy.contains(product)
          .should('be.visible');
    });
  })
});