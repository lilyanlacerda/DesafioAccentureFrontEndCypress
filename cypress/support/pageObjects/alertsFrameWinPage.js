export class AlertsFrameWinPage {
  elements = {
    newWindowBtn: () => cy.get("#windowButton"),       // botão "New Window"
    message: () => cy.contains("This is a sample page") // validação do conteúdo
    
  };
}
