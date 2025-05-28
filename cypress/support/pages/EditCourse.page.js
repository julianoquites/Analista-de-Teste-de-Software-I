class EditCoursePage {
  visit() {
    cy.visit("/curso/index");
  }

  visitPageIndexNine() {
      cy.visit("/curso/index?page=9");
    }
}

export default new EditCoursePage();
