# desafio-cypress-QA


# Testes de Automação - Funcionalidade "Adicionar ao Carrinho" com Cypress

Este repositório contém testes de automação utilizando [Cypress](https://www.cypress.io/) para validar a funcionalidade de **adicionar produtos ao carrinho** na página web da loja [EBAC](http://lojaebac.ebaconline.art.br/).

## 📦 Requisitos

- Node.js (versão recomendada: >= 14)
- npm ou yarn

## 🚀 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/retxeeD/desafio-cypress-QA.git
cd desafio-cypress-QA
npm install
```

## 🧪 Executando os testes

### Interface Gráfica (Cypress Test Runner)

```bash
npx cypress open
```

### Modo Headless (terminal)

```bash
npx cypress run
```

## 📁 Estrutura de pastas

```
.
├── cypress/              # Testes automatizados
│   └── e2e/              # Testes para a funcionalidade "Adicionar ao Carrinho"
├── node_modules/
├── .gitignore
├── cypress.config.js     # Configuração do Cypress
├── package.json
└── README.md
```

## 🔍 Funcionalidade Testada

Os testes automatizam o seguinte cenário:
- **Adicionar um produto ao carrinho**: O teste garante que ao clicar no botão "Adicionar ao carrinho" o produto é corretamente adicionado ao carrinho.

### Testes incluem:
1. Seleção do produto.
2. Clique no botão "Adicionar ao carrinho".
3. Verificação de que o produto foi adicionado ao carrinho (verificação do número de itens no carrinho).
4. Verificação de que o produto não pode ser adiciona caso:
    1. Tamanho não selecionado.
    2. Cor nao selecionada.
    3. Produto fora de estoque.
