export class FormsPage {
  elements = {
    firstName: () => cy.get("#firstName"),
    lastName: () => cy.get("#lastName"),
    email: () => cy.get("#userEmail"),
    genderMale: () => cy.get("#gender-radio-1"),
    phone: () => cy.get("#userNumber"),
    subjects: () => cy.get(".subjects-auto-complete__value-container"),
    hobbies: () => cy.get("#hobbies-checkbox-1"),
    upload: () => cy.get("#uploadPicture"),
    address: () => cy.get("#currentAddress"),
    state: () => cy.get("#react-select-3-input"),
    city: () => cy.get("#react-select-4-input"),
    submit: () => cy.get("#submit"),
    popup: () => cy.get(".modal-content"),
    closePopup: () => cy.get("#closeLargeModal"),
  };

  fillForm(user) {
    this.elements.firstName().type(user.firstName);
    this.elements.lastName().type(user.lastName);
    this.elements.email().type(user.email);
    this.elements.genderMale().click({ force: true });
    this.elements.phone().type(user.phone);
    this.elements.subjects().type("Maths{enter}");
    this.elements.hobbies().click({ force: true });
    this.elements.upload().selectFile("fixtures/uploadFile.txt");
    this.elements.address().type(user.address);
    this.elements.state().type("NCR{enter}", { force: true });
    this.elements.city().type("Delhi{enter}", { force: true });
    this.elements.submit().click({ force: true });
  }

  validatePopup() {
    this.elements.popup().should("be.visible");
    this.elements.closePopup().click({ force: true });
  }
}
