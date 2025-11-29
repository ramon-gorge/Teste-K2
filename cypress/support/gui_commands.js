import { loginPage} from '../pages/loginPage';
import { cadastrarUsuario } from '../pages/cadastrarUsuario';
import { cadastrarProduto } from '../pages/cadastrarProduto';
import { faker } from '@faker-js/faker';

//loga como admin
Cypress.Commands.add('loginAdmin', () => {
    const email = Cypress.env('testEmail');
    const password = Cypress.env('testPassword');
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.contains('Entrar').click()
});

//loga como usuario comum
Cypress.Commands.add('loginUser', () => {
    const emailc = Cypress.env('testEmailC');
    const passwordc = Cypress.env('testPasswordC');
    cy.get('#email').type(emailc)
    cy.get('#password').type(passwordc)
    cy.contains('Entrar').click()
});

//cria usuario admin usando a biblioteca faker antes de logar
Cypress.Commands.add('cadastrarAdminUser', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    const firstName = faker.person.firstName();
    cy.get('#nome').type(firstName);

    const email = faker.internet.email();
    Cypress.env('testEmail', email);
    cy.get('#email').type(email);

    const password = faker.internet.password();
    cy.wrap(password).as('createdPassword');
    Cypress.env('testPassword', password); 
    cy.get('#password').type(password);
    cy.get('#administrador').check();
    cy.contains('button', 'Cadastrar').click();
    cy.contains('Cadastro realizado com sucesso')
        .should('be.visible');
});

//cria usuario admin na pagina de cadastro quando ja esta logado
Cypress.Commands.add('criarAdminUser', () => {
    const name = faker.person.firstName();
    cy.get('#nome').type(name);

    const email = faker.internet.email();
    cy.wrap(email).as('createdEmail');
    cy.get('#email').type(email);

    const password = faker.internet.password();
    cy.get('#password').type(password);
    cy.get('#administrador').check();
    cy.contains('button', 'Cadastrar').click();
});

//cria usuario cliente usando a biblioteca faker para efetuar login
Cypress.Commands.add('cadastrarCliente', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    const firstName = faker.person.firstName();
    cy.get('#nome').type(firstName);

    const emailc = faker.internet.email();
    cy.wrap(emailc).as('createdEmailC');
    Cypress.env('testEmailC', emailc);
    cy.get('#email').type(emailc);

    const passwordc = faker.internet.password();
    cy.wrap(passwordc).as('createdPasswordC');
    Cypress.env('testPasswordC', passwordc); 
    cy.get('#password').type(passwordc);
    cy.contains('button', 'Cadastrar').click();
    cy.contains('Cadastro realizado com sucesso')
        .should('be.visible');
    cy.contains('Serverest Store')
        .should('be.visible');        
});

//cria cliente na pagina de cadastro quando ja esta logado
Cypress.Commands.add('criarCliente', () => {
    const firstName = faker.person.firstName();
    cy.get('#nome').type(firstName);

    const email = faker.internet.email();
    cy.wrap(email).as('createdEmail');
    cy.get('#email').type(email);

    const password = faker.internet.password();
    cy.get('#password').type(password);
    cy.contains('button', 'Cadastrar').click();
    cy.contains('Lista dos usuários')
        .should('be.visible');       
});

//cria produto usando a biblioteca faker
Cypress.Commands.add('criarProduto', () => {
    cy.visit('https://front.serverest.dev/admin/cadastrarprodutos')
    const nomeProduto = faker.food.dish();
    cy.wrap(nomeProduto).as('createdProduct');
    Cypress.env('testProduct', nomeProduto);
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
    const nomeProduto = Cypress.env('testProduct');
        cy.contains('Produtos')
            .should('be.visible');
        cy.contains('button', 'Adicionar a lista').click();
        cy.contains('Lista de Compras')
            .should('be.visible');
        cy.contains('Limpar Lista').click();
        cy.contains('Seu carrinho está vazio')
            .should('be.visible');
        cy.contains('Página Inicial').click();
});