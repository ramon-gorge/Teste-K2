import { faker } from '@faker-js/faker';

Cypress.Commands.add('loginApi', () => {
    const email = Cypress.env('testEmail');
    const password = Cypress.env('testPassword');
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
            email: 'testEmail', email,
            password: 'testPassword', password
        }
}).then((response) => { return response});
});

Cypress.Commands.add('cadastrarUsuario', () => {
    //criar usurio usando fakerbiblioteca
    const nome = faker.person.firstName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    //armazenar email e senha em variveis de ambiente para uso posterior
    Cypress.env('testEmail', email);
    Cypress.env('testPassword', password);

    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
                nome: nome,
                email: email,
                password: password,
                administrador: "true"
            }
}).then((response) => { return response});
});

Cypress.Commands.add('addProductApi', () => {
    const nomeProduto = faker.food.dish()
    const preco =  faker.number.int({ min: 10, max: 100 })
    const descricao = faker.food.description()
    const quantidade = faker.number.int({ min: 1, max: 50 })

    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: {authorization: Cypress.env('token')},
        body: {
            nome: nomeProduto,
            preco: preco,
            descricao: descricao,
            quantidade: quantidade
            }
    }).then((response) => {
        // store created product id for later use (handle common response shapes)
        const productId = response?.body?._id || response?.body?.id || response?.body;
        Cypress.env('productId', productId);
        return response;
    });
});

Cypress.Commands.add('cadastrarCarrinhoApi', () => {
    const productId = Cypress.env('productId');
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/carrinhos',
        headers: {authorization: Cypress.env('token')},
        body: {
            produtos: [
                {
                idProduto: productId,
                quantidade: 1
                }
                ]
            }
}).then((response) => { return response});
});