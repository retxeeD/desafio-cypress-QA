var productValue;

describe('Testes da funcionalidade de carrinho', () => {

  it('Adiciona o produto Ingrid Running Jacket ao carrinho', () => {
    visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/');
    wait(3);
    clickIn("li[data-wvstooltip='XS']");
    clickIn("li[data-wvstooltip='Orange']");
    clickIn('.single_add_to_cart_button');
    validContent('.woocommerce-message','foi adicionado no seu carrinho');
    validContent('.mini-cart-items', '1');
  });

  it('Adiciona multiplos itens ao carrinho', () => {
    visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/');
    wait(3);
    clickIn("li[data-wvstooltip='XS']");
    clickIn("li[data-wvstooltip='Orange']");
    clickIn('.single_add_to_cart_button');
    validContent('.woocommerce-message','foi adicionado no seu carrinho');
    validContent('.mini-cart-items', '1');

    visit('http://lojaebac.ebaconline.art.br/product/stellar-solar-jacket/');
    wait(3);
    clickIn("li[data-wvstooltip='S']");
    clickIn("li[data-wvstooltip='Blue']");
    clickIn('.single_add_to_cart_button');
    validContent('.woocommerce-message','foi adicionado no seu carrinho');
    validContent('.mini-cart-items', '2');

    visit('http://lojaebac.ebaconline.art.br/product/josie-yoga-jacket/');
    wait(3);
    clickIn("li[data-wvstooltip='XS']");
    clickIn("li[data-wvstooltip='Black']");
    clickIn('.single_add_to_cart_button');
    validContent('.woocommerce-message','foi adicionado no seu carrinho');
    validContent('.mini-cart-items', '3');
  })

  it('Adiciona item multiplas vezes ao carrinho', () => {
    visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/');
    wait(3);
    clickIn("li[data-wvstooltip='XS']");
    clickIn("li[data-wvstooltip='Orange']");
    clickIn('div.quantity input.plus');
    clickIn('.single_add_to_cart_button');
    validContent('.woocommerce-message','foram adicionados no seu carrinho.');
    validContent('.mini-cart-items', '2');
  });

  it('Nao permite adicionar sem selecionar tamanho', () => {
    visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/');
    wait(3);
    clickIn("li[data-wvstooltip='Orange']");
    cy.get('.single_add_to_cart_button').click({ force: true });
    validAlertMsg('Selecione uma das opções do produto antes de adicioná-lo ao carrinho.');
    validContent('.mini-cart-items', '0');
  });

  it('Nao permite adicionar sem selecionar cor', () => {
    visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/');
    wait(3);
     clickIn("li[data-wvstooltip='XS']");
    cy.get('.single_add_to_cart_button').click({ force: true });
    validAlertMsg('Selecione uma das opções do produto antes de adicioná-lo ao carrinho.');
    validContent('.mini-cart-items', '0');
  });

  it('Nao permite adicionar sem estoque', () => {
    visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/');
    wait(3);
    clickIn("li[data-wvstooltip='XL']");
    clickIn("li[data-wvstooltip='White']");
    cy.get('.single_add_to_cart_button').click({ force: true });
    validAlertMsg('Desculpe, este produto não está disponível. Escolha uma combinação diferente.');
    validContent('.mini-cart-items', '0');
  });

});

function visit(path){
  cy.visit(path);

}

function clickIn(path) {
  cy.get(path)
    .should('be.visible')
    .should('not.be.disabled')
    .click();
}

function validContent(path, expectedValue){
  cy.get(path).should('be.visible').should('not.be.disabled').should('contain', expectedValue);
}

function validAlertMsg(msg){
  cy.on('window:alert', (str) => {
    expect(str).to.equal(msg);
  });
}

function wait(time){
  cy.wait(time * 1000);
}

function log(text){
  cy.log(text);
}