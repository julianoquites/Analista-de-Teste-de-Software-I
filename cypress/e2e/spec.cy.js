import CreateCoursePage from "../support/pages/CreateCourse.page";
import { faker } from "@faker-js/faker";

describe("Fluxo de Criação de Curso", () => {
  beforeEach(() => {
    cy.fixture("login").then((credenciais) => {
      cy.login(credenciais.cpf, credenciais.senha);
    });
  });

  it("Deve criar um curso com os dados obrigatórios", () => {
    cy.intercept("POST", "/curso/verificar_campos/").as("verificarCampos");
    CreateCoursePage.visit();

    const cursoMock = {
      nome: faker.lorem.words(3),
      descricao: faker.lorem.paragraph(),
      objetivos: faker.lorem.sentences(2),
      cargaHoraria: faker.number.int({ min: 1, max: 60 }).toString(),
    };

    CreateCoursePage.criarCursoBasico(cursoMock);
    cy.wait(5000);

    cy.wait("@verificarCampos").its("response.statusCode").should("eq", 200);
  });

  it("Deve exibir erro ao criar curso sem nome", () => {
    CreateCoursePage.visit();
  });
});
