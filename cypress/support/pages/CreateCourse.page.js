class CreateCoursePage {
  visit() {
    cy.visit("/curso/create");
  }

  get thumb() {
    return cy.get("#thumb");
  }

  get name() {
    return cy.get("#name");
  }

  get descricao() {
    return cy.get("#descricao");
  }

  get objetivosAprendizagem() {
    return cy.get("#objetivos_aprendizagem");
  }

  get teaser() {
    return cy.get("#teaser");
  }

  get publicoAlvo() {
    return cy.get(".ms-choice");
  }

  get modalidade() {
    return cy.get("#modalidade");
  }

  get cargaHoraria() {
    return cy.get("#carga_horaria");
  }

  get addAvaliacao() {
    return cy.get("#add-avaliacao");
  }

  get interesses() {
    return cy.get("#div-interesses");
  }

  get selecionarCursos() {
    return cy.get("input[type='checkbox'][id^='curso_']");
  }

  get submitButton() {
    return cy.get("#file-submit");
  }

  selecionarCursosPorIds(ids = []) {
    ids.forEach((id) => {
      cy.get(`#curso_${id}`).check().should("be.checked");
    });
  }

  criarCursoBasico(dadosCurso) {
    this.name.type(dadosCurso.nome);
    this.descricao.type(dadosCurso.descricao);
    this.objetivosAprendizagem.type(dadosCurso.objetivos);
    this.cargaHoraria.type(dadosCurso.cargaHoraria);
    this.submitButton.click();
  }
}

export default new CreateCoursePage();
