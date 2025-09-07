export class WidgetsPage {
  elements = {
    startStopBtn: () => cy.get("#startStopButton"),
    progressBar: () => cy.get(".progress-bar"),
  };

  getProgressValue() {
    return this.elements.progressBar()
      .invoke("attr", "aria-valuenow")
      .then(Number); // garante que sempre retorna número
  }
}
