import { loginPage} from '../pages/loginPage';
import { cadastrarUsuario } from '../pages/cadastrarUsuario';
import { cadastrarProduto } from '../pages/cadastrarProduto';
import { faker } from '@faker-js/faker';

//loga como admin
Cypress.Commands.add('loginAdmin', () => {
    cy.get('#email').type('admin@admin.com')
    cy.get('#password').type('admin1234')
    cy.contains('Entrar').click()
});

//loga como usuario comum
Cypress.Commands.add('loginUser', () => {
    cy.get('#email').type('customer@client.com')
    cy.get('#password').type('test1234')
    cy.contains('Entrar').click()
});

//cria usuario admin usando a biblioteca faker
Cypress.Commands.add('criarAdminUser', () => {
    const firstName = faker.person.firstName();
    cy.get('#nome').type(firstName);

    const email = faker.internet.email();
    cy.wrap(email).as('createdEmail');
    cy.get('#email').type(email);

    const password = faker.internet.password();
    cy.get('#password').type(password);
    cy.get('#administrador').check();
    cy.contains('button', 'Cadastrar').click();
});

//cria usuario cliente usando a biblioteca faker
Cypress.Commands.add('criarCliente', () => {
    const firstName = faker.person.firstName();
    cy.get('#nome').type(firstName);

    const email = faker.internet.email();
    cy.wrap(email).as('createdEmail');
    cy.get('#email').type(email);

    const password = faker.internet.password();
    cy.get('#password').type(password);
    cy.contains('button', 'Cadastrar').click();
});

//cria produto usando a biblioteca faker
Cypress.Commands.add('criarProduto', () => {
    cy.visit('https://front.serverest.dev/admin/cadastrarprodutos')
    const nomeProduto = faker.food.dish();
    cy.wrap(nomeProduto).as('createdProduct');
    cy.get('#nome').type(nomeProduto);

    const preco = faker.number.int({ min: 10, max: 100 })
    cy.get('#price').type(preco);

    const descricao = faker.food.description();
    cy.get('#description').type(descricao);

    const quantidade = faker.number.int({ min: 1, max: 50 })
    cy.get('#quantity').type(quantidade);
    cy.contains('button', 'Cadastrar').click();
});

Cypress.Commands.add('addProduto', () => {
        cy.contains('Produtos')
            .should('be.visible');
        cy.contains('Lasagne')
            .parent()
            .contains('button', 'Adicionar a lista')
            .click();
        cy.contains('Lista de Compras')
            .should('be.visible');
        cy.contains('Limpar Lista').click();
        cy.contains('Seu carrinho está vazio')
            .should('be.visible');
        cy.contains('Página Inicial').click();
});