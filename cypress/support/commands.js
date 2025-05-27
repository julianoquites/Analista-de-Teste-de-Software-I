Cypress.Commands.add("login", (cpf, senha) => {
  LoginPage.visit();
  LoginPage.preencherCredenciais(cpf, senha);
  LoginPage.submit();
});
