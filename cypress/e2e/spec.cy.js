import LoginPage from "../support/pages/Login.page";
import CreateCoursePage from "../support/pages/CreateCourse.page";

describe("Fluxo de Criação de Curso", () => {
  beforeEach(() => {
    cy.fixture("login").then(({ cpf, senha }) => {
      LoginPage.visit();
      LoginPage.preencherCredenciais(cpf, senha);
      LoginPage.submit();
    });
  });

  it("Deve criar um curso com dados válidos", () => {
    CreateCoursePage.visit();
  });

  it("Deve exibir erro ao criar curso sem nome", () => {
    CreateCoursePage.visit();
  });
});
