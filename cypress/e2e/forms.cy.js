import { FormsPage } from "../support/pageObjects/formsPage";
import { userFactory } from "../support/factory/userFactory";

describe("Forms", () => {
  const formsPage = new FormsPage();
  const user = userFactory();

  it("Caso de Teste 1 - Deve preencher e submeter o formulário com sucesso", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Practice Form").click();

    formsPage.fillForm(user);
    formsPage.validatePopup();
  });
});
