// cypress/support/pageObjects/interactionsPage.js

class InteractionsPage {
  elements = {
    sortableTab: () => cy.contains('Sortable'),
    listTab: () => cy.contains('List'),
    sortableItems: () =>
  cy.get('#demo-tabpane-list .list-group-item', { timeout: 10000 }),

  };

  clickSortableTab() {
    this.elements.sortableTab().click();
  }

  clickListTab() {
    this.elements.listTab().click();
    cy.get('#demo-tabpane-list').should('be.visible');
  }

  getSortableItems() {
    return this.elements.sortableItems().should('have.length.greaterThan', 0);
  }

sortItemsAscending() {
  this.getSortableItems().then(items => {
    const texts = [...items].map(el => el.innerText.trim().toLowerCase());
    const sorted = [...texts].slice().sort();

    // arrasta cada item para a posição correta
    sorted.forEach((text, index) => {
      cy.contains('#demo-tabpane-list .list-group-item', new RegExp(`^${text}$`, 'i'))
        .should('be.visible')
        .drag(items[index], { force: true });

      cy.wait(300); // deixa a animação terminar
    });

    // valida ordem final
    this.getSortableItems().then(newItems => {
      const newTexts = [...newItems].map(el => el.innerText.trim().toLowerCase());
      cy.log('Ordem atual:', JSON.stringify(newTexts));
      cy.log('Ordem esperada:', JSON.stringify(sorted));
      expect(newTexts).to.deep.equal(sorted);
    });
  });
}
}

export default InteractionsPage;
