import { WidgetsPage } from "../support/pageObjects/widgetsPage";

describe("Widgets / Progress Bar", () => {
  const widgets = new WidgetsPage();

  beforeEach(() => {
    cy.visit("/progress-bar");
    cy.clock(); // congela o tempo da animação
  });

  it("Caso de Teste 1 - Deve parar antes de 25% e validar, depois completar até 100%", () => {
    widgets.elements.startStopBtn().as("startBtn");

    // Inicia a progress bar
    cy.get("@startBtn").click();

    // Avança o tempo para simular a barra subindo até ~25%
    cy.tick(1000); // ajuste conforme a velocidade da animação
    widgets.getProgressValue().should("be.lte", 25);

    // Para a barra
    cy.get("@startBtn").click();

    // Retoma a barra
    cy.get("@startBtn").click();

    // Avança o tempo até completar 100%
    cy.tick(10000); // ajuste para garantir que a barra chegue a 100%
    widgets.getProgressValue().should("eq", 100);
  });
});
