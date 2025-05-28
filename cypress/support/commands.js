import LoginPage from "../support/pages/Login.page";

Cypress.Commands.add("login", (cpf, senha) => {
  LoginPage.visit();
  LoginPage.preencherCredenciais(cpf, senha);
  LoginPage.submit();
});
