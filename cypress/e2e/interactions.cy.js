// cypress/e2e/sortable.cy.js
import InteractionsPage from '../support/pageObjects/interactionsPage';

describe('Interactions - Sortable', () => {
  const interactionsPage = new InteractionsPage();

  beforeEach(() => {
    cy.visit('/sortable');
  });

  it('Caso de Teste 1 - Deve ordenar os elementos da lista vertical em ordem crescente', () => {
    // já abre na aba List, mas garantimos que clicou
    interactionsPage.clickListTab();

    // garante que os itens visíveis estão carregados
    interactionsPage.getSortableItems().then(items => {
      expect(items.length).to.be.greaterThan(0);
    });

    // ordena os itens
    interactionsPage.sortItemsAscending();

    // valida a ordem crescente
    interactionsPage.getSortableItems().then(items => {
      const texts = [...items].map(el => el.innerText);
      const sorted = [...texts].sort();
      expect(texts).to.deep.equal(sorted);
    });
  });
});
