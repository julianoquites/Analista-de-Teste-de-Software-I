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

  get formularioPrincipal() {
    return cy.get("#formularioPrincipal > .card");
  }

  get submitButton() {
    return cy.get("#file-submit");
  }

  // Métodos para interações complexas
  selecionarPublicoAlvo(publico) {
    this.publicoAlvo.click();
    return cy.contains(publico).click();
  }

  criarCursoBasico(dadosCurso) {
    this.thumb.selectFile(dadosCurso.thumbPath);
    this.name.type(dadosCurso.nome);
    this.descricao.type(dadosCurso.descricao);
    this.objetivosAprendizagem.type(dadosCurso.objetivos);
    this.modalidade.select(dadosCurso.modalidade);
    this.cargaHoraria.type(dadosCurso.cargaHoraria);
    this.submitButton.click();
  }
}

export default new CreateCoursePage();
