export class ElementsPage {
  elements = {
    addBtn: () => cy.get("#addNewRecordButton"),
    firstName: () => cy.get("#firstName"),
    lastName: () => cy.get("#lastName"),
    email: () => cy.get("#userEmail"),
    age: () => cy.get("#age"),
    salary: () => cy.get("#salary"),
    department: () => cy.get("#department"),
    submitBtn: () => cy.get("#submit"),
    editBtn: () => cy.get("[title='Edit']"),
    deleteBtn: () => cy.get("[title='Delete']"),
    rows: () => cy.get(".rt-tr-group"),
  };

  addRecord(user) {
    this.elements.addBtn().as("addButton");
    cy.get("@addButton").click();

    this.elements.firstName().type(user.firstName);
    this.elements.lastName().type(user.lastName);
    this.elements.email().type(user.email);
    this.elements.age().type(user.age);
    this.elements.salary().type(user.salary);
    this.elements.department().type(user.department);

    this.elements.submitBtn().as("submitButton");
    cy.get("@submitButton").click();
  }

  editFirstRecord(newUser) {
    this.elements.editBtn().first().as("editButton");
    cy.get("@editButton").click();

    this.elements.firstName().clear().type(newUser.firstName);
    this.elements.lastName().clear().type(newUser.lastName);
    this.elements.email().clear().type(newUser.email);

    this.elements.submitBtn().as("submitEdit");
    cy.get("@submitEdit").click();
  }

  deleteFirstRecord() {
    this.elements.deleteBtn().first().as("deleteButton");
    cy.get("@deleteButton").click();
  }
}
