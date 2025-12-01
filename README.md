# Teste de Automação Serverest

## Descrição do Projeto

Este repositório contém um conjunto de testes de automação de API e WEB do Serverest, para o processo seletivo da empresa K2.


## Pré-requisitos

Para rodar este projeto localmente, você precisará ter o Node.js, npm e Cypress instalados em sua máquina.

  * **Node.js**: v22.15.0.
  * **npm**: 10.9.2.
  * **Cypress**: v15.7.0.

## Instalação

Siga os passos abaixo para clonar o repositório e instalar as dependências:

1.  **Clone o repositório:**
    ```bash
    git clone git@github.com:ramon-gorge/Teste-K2.git
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Teste K2
    ```
3.  **Instale as dependências:**
    ```bash
    npm install cypress --save-dev
    ```
    
    ```bash
    npm install @faker-js/faker --save-dev
    ```
    
    ```bash
    npm i cypress-plugin-api
    ```
    

## Executar os Testes

Os testes podem ser executatos através da interface gráfica ou do modo headless.

### 1\. Execução Interface Gráfica

Use este comando para abrir o *Cypress Test Runner*, onde você pode visualizar e selecionar os testes a serem executados em tempo real:

```bash
npx cypress open
```

### 2\. Execução no Modo Headless 

Para rodar os testes em segundo plano e gerar relatórios no terminal, use o comando:

```bash
npx cypress run
```
