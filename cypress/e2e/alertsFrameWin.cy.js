import { AlertsFrameWinPage } from "../support/pageObjects/alertsFrameWinPage";

describe("Alerts, Frame & Windows ", () => {
  const alertsFrameWinPage = new AlertsFrameWinPage();

  beforeEach(() => {
    cy.visit("/browser-windows");
  });

  it("Caso de Teste 1 - Deve abrir nova janela e validar mensagem", () => {      
    alertsFrameWinPage.elements.newWindowBtn().click();
    cy.visit("/sample"); // acessa o conteúdo da nova janela
    alertsFrameWinPage.elements.message().should("be.visible");
    // "Fechar" - volta para a página original
    cy.visit("/browser-windows");
  });
});
