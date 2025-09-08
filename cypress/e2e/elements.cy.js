import { ElementsPage } from "../support/pageObjects/elementsPage";
import { userFactory } from "../support/factory/userFactory";

describe("Elements / Web Tables - CRUD", () => {
  const elementsPage = new ElementsPage();

  beforeEach(() => {
    cy.visit("/webtables"); // acessa diretamente a página Web Tables
    // cy.visit("/");
    // cy.contains("Elements").click();
    // cy.contains("Web Tables").click();
  });

  it("Caso de Teste 1 - Deve criar, editar e deletar um registro", () => {
    // Criar registro inicial
    const user = {
      ...userFactory(),
      age: "30",
      salary: "5000",
      department: "QA",
    };
    elementsPage.addRecord(user);

    // Validar criação
    cy.contains(user.firstName).should("be.visible");
    cy.contains(user.lastName).should("be.visible");

    // Editar registro
    const updatedUser = userFactory();
    elementsPage.editFirstRecord(updatedUser);

    // Validar edição
    cy.contains(updatedUser.firstName).should("be.visible");
    cy.contains(updatedUser.lastName).should("be.visible");

    // Remover registro
    elementsPage.deleteFirstRecord();

    // Validar remoção
    cy.contains(updatedUser.firstName).should("not.exist");
    cy.contains(updatedUser.lastName).should("not.exist");
  });
});
