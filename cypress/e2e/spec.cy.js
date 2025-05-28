import CreateCoursePage from "../support/pages/CreateCourse.page";
import EditCoursePage from "../support/pages/EditCourse.page";
import "cypress-file-upload";
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
      nome: faker.lorem.words(1),
      descricao: faker.lorem.paragraph(),
      objetivos: faker.lorem.sentences(2),
      cargaHoraria: faker.number.int({ min: 1, max: 60 }).toString(),
    };

    CreateCoursePage.criarCursoBasico(cursoMock);

    cy.wait("@verificarCampos").its("response.statusCode").should("eq", 200);
  });

  it("Deve bloquear upload de imagem com mais de 2MB", () => {
    CreateCoursePage.visit();

    cy.fixture("large-image.jpg", null).then((fileContent) => {
      cy.get("#thumb").attachFile({
        fileContent: fileContent.toString(),
        fileName: "large-image.jpg",
        mimeType: "image/jpeg",
      });
    });

    cy.get("#file-result").should(
      "have.text",
      "Por favor selecione arquivo com menos de 2MB."
    );
  });

  it("Deve recusar a criação de um curso sem o dado obrigatório de descrição", () => {
    CreateCoursePage.visit();

    const cursoMock = {
      nome: faker.lorem.words(3),
      objetivos: faker.lorem.sentences(2),
      cargaHoraria: faker.number.int({ min: 1, max: 60 }).toString(),
    };

    CreateCoursePage.name.type(cursoMock.nome);
    CreateCoursePage.objetivosAprendizagem.type(cursoMock.objetivos);
    CreateCoursePage.cargaHoraria.type(cursoMock.cargaHoraria);

    CreateCoursePage.submitButton.click();
    cy.wait(5000);

    CreateCoursePage.submitButton.should("be.visible");
  });

  it("Deve recusar a criação de um curso com o dado obrigatório de nome com menos de dois caracteres", () => {
    CreateCoursePage.visit();

    const cursoMock = {
      nome: faker.lorem.word(1),
      descricao: faker.lorem.paragraph(),
      objetivos: faker.lorem.sentences(2),
      cargaHoraria: faker.number.int({ min: 1, max: 60 }).toString(),
    };

    CreateCoursePage.criarCursoBasico(cursoMock);
    cy.get("#erro-nome").should("be.visible");
  });
  it("Deve aceitar a criação de um curso com seleção de todos os pre-requisitos", () => {
    cy.intercept("POST", "/curso/verificar_campos/").as("verificarCampos");

    const cursoMock = {
      nome: faker.lorem.words(1),
      descricao: faker.lorem.paragraph(),
      objetivos: faker.lorem.sentences(2),
      cargaHoraria: faker.number.int({ min: 1, max: 60 }).toString(),
    };

    CreateCoursePage.visit();

    CreateCoursePage.name.type(cursoMock.nome);
    CreateCoursePage.descricao.type(cursoMock.descricao);
    CreateCoursePage.objetivosAprendizagem.type(cursoMock.objetivos);
    CreateCoursePage.cargaHoraria.type(cursoMock.cargaHoraria);
    CreateCoursePage.selecionarCursos.check();

    CreateCoursePage.submitButton.click();
    cy.wait(5000);

    CreateCoursePage.submitButton.should("be.visible");

    cy.wait("@verificarCampos").its("response.statusCode").should("eq", 200);
  });

  it("Deve editar o nome de um curso com sucesso", () => {
    let courseNameMock = faker.lorem.words(1);
    EditCoursePage.visit();
    EditCoursePage.visitPageIndexNine();
    cy.get('[data-curso-id="127"]').click();

    CreateCoursePage.name.clear();
    CreateCoursePage.name.type(courseNameMock);
    CreateCoursePage.submitButton.click();
    cy.wait(5000);
    cy.visit("curso/edit/127");
    cy.get("#name").should("have.value", courseNameMock);
  });

  it.only("Deve recusar a edição do nome de um curso com menos de dois caracteres", () => {
    let courseNameMock = faker.lorem.word(1);

    EditCoursePage.visit();
    EditCoursePage.visitPageIndexNine();
    cy.get('[data-curso-id="127"]').click();
    CreateCoursePage.name.clear();
    CreateCoursePage.name.type(courseNameMock);
    CreateCoursePage.submitButton.click();
    cy.get("#erro-nome").should("be.visible");
  });

  it("Deve editar o campo de descrição de um curso com sucesso", () => {
    let courseDescriptionMock = faker.lorem.paragraph();
    EditCoursePage.visit();
    EditCoursePage.visitPageIndexNine();
    cy.get('[data-curso-id="127"]').click();
    CreateCoursePage.descricao.clear();
    CreateCoursePage.descricao.type(courseDescriptionMock);
    CreateCoursePage.submitButton.click();
    cy.wait(5000);
    cy.visit("curso/edit/127");
    cy.get("#descricao").should("have.value", courseDescriptionMock);
  });

  it("Deve editar o campo de objetivos de aprendizagem de um curso com sucesso", () => {
    let courseObjectivesMock = faker.lorem.sentences(2);
    EditCoursePage.visit();
    EditCoursePage.visitPageIndexNine();
    cy.get('[data-curso-id="127"]').click();
    CreateCoursePage.objetivosAprendizagem.clear();
    CreateCoursePage.objetivosAprendizagem.type(courseObjectivesMock);
    CreateCoursePage.submitButton.click();
    cy.wait(5000);
    cy.visit("curso/edit/127");
    cy.get("#objetivos_aprendizagem").should(
      "have.value",
      courseObjectivesMock
    );
  });

  it("Deve editar o campo de carga horaria de um curso com sucesso", () => {
    let courseTimeMock = faker.number.int({ min: 1, max: 60 }).toString();
    EditCoursePage.visit();
    EditCoursePage.visitPageIndexNine();
    cy.get('[data-curso-id="127"]').click();
    CreateCoursePage.cargaHoraria.clear();
    CreateCoursePage.cargaHoraria.type(courseTimeMock);
    CreateCoursePage.submitButton.click();
    cy.wait(5000);
    cy.visit("curso/edit/127");
    cy.get("#carga_horaria").should("have.value", courseTimeMock);
  });
});
