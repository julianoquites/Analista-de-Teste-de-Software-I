/// <reference types="cypress" />

class LoginPage {
  // Elementos
  get campoCpf() {
    return cy.get("#cpf");
  }

  get campoSenha() {
    return cy.get("#password");
  }

  get botaoSubmit() {
    return cy.get("#submitBtn");
  }

  // Ações
  visit() {
    cy.visit("/login");
  }

  preencherCredenciais(cpf, senha) {
    this.campoCpf.should("be.visible").type(cpf);
    this.campoSenha.should("be.visible").type(senha);
  }

  submit() {
    this.botaoSubmit.click();
  }

  login(cpf, senha) {
    this.visit();
    this.preencherCredenciais(cpf, senha);
    this.submit();
  }
}

export default new LoginPage();
