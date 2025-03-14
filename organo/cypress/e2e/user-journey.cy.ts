describe("Teste de jornada de usuário", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve verificar a existência de elementos iniciais ao acessar a aplicação", () => {
    cy.location("pathname").should("eq", "/");

    cy.getByDataTest("banner-image")
      .should("exist")
      .should("have.attr", "alt")
      .and("eq", "Banner de fundo do organo.");

    cy.getByDataTest("register-collaborator-button")
      .should("exist")
      .find("svg")
      .should("exist");
    cy.getByDataTest("register-collaborator-button").contains(
      "Novo colaborador"
    );

    cy.getByDataTest("empty-collaborators-list")
      .should("exist")
      .find("svg")
      .should("exist");
    cy.getByDataTest("empty-collaborators-list")
      .find("p")
      .should("exist")
      .contains(
        'Aperte o botão "Novo colaborador" para cadastrar um novo colaborador.'
      );

    cy.getByDataTest("footer")
      .should("exist")
      .find("img")
      .should("have.attr", "alt")
      .and("eq", "Logo do Organo.");
    cy.getByDataTest("footer").find("p").contains("Desenvolvido por Breno.");
  });

  it("Deve permitir cadastrar colaboradores", () => {
    cy.getByDataTest("register-collaborator-button").click();

    cy.getByDataTest("register-collaborator-form")
      .should("exist")
      .find("h1")
      .contains("Preencha os dados para criar o card do colaborador.");

    cy.getByDataTest("name-field").type("Breno Silva Gonçalves");
    cy.getByDataTest("position-field").type("Desenvolvedor Front-end");
    cy.getByDataTest("image-field").type("https://github.com/BrenoDev00.png");
    cy.getByDataTest("team-options").select("Front-End");
    cy.getByDataTest("register-collaborator-form-submit-button").click();

    cy.getByDataTest("register-collaborator-button").click();

    cy.getByDataTest("register-collaborator-form")
      .should("exist")
      .find("h1")
      .contains("Preencha os dados para criar o card do colaborador.");

    cy.getByDataTest("name-field").type("Pedro Henrique");
    cy.getByDataTest("position-field").type("UX Designer");
    cy.getByDataTest("team-options").select("UX e Design");
    cy.getByDataTest("register-collaborator-form-submit-button").click();
  });

  it("Deve contar a quantidade correta de colaboradores cadastrados", () => {
    cy.getByDataTest("register-collaborator-button").click();

    cy.getByDataTest("register-collaborator-form")
      .should("exist")
      .find("h1")
      .contains("Preencha os dados para criar o card do colaborador.");

    cy.getByDataTest("name-field").type("Pedro Henrique");
    cy.getByDataTest("position-field").type("UX Designer");
    cy.getByDataTest("team-options").select("UX e Design");
    cy.getByDataTest("register-collaborator-form-submit-button").click();

    cy.getByDataTest("collaborator-record-count")
      .should("exist")
      .contains("Total de Registros: 1");
  });

  it("Deve permitir pesquisar colaboradores cadastrados", () => {
    cy.getByDataTest("register-collaborator-button").click();

    cy.getByDataTest("register-collaborator-form")
      .should("exist")
      .find("h1")
      .contains("Preencha os dados para criar o card do colaborador.");

    cy.getByDataTest("name-field").type("Breno Silva Gonçalves");
    cy.getByDataTest("position-field").type("Desenvolvedor Front-end");
    cy.getByDataTest("image-field").type("https://github.com/BrenoDev00.png");
    cy.getByDataTest("team-options").select("Front-End");
    cy.getByDataTest("register-collaborator-form-submit-button").click();

    cy.getByDataTest("register-collaborator-button").click();

    cy.getByDataTest("register-collaborator-form")
      .should("exist")
      .find("h1")
      .contains("Preencha os dados para criar o card do colaborador.");

    cy.getByDataTest("name-field").type("Pedro Henrique");
    cy.getByDataTest("position-field").type("UX Designer");
    cy.getByDataTest("team-options").select("UX e Design");
    cy.getByDataTest("register-collaborator-form-submit-button").click();

    cy.getByDataTest("search-bar").should("exist").type("Breno");

    cy.getByDataTest("collaborator-card").contains("Breno Silva Gonçalves");

    cy.getByDataTest("search-bar").clear();

    cy.getByDataTest("search-bar").type("Pedro");

    cy.getByDataTest("collaborator-card").contains("Pedro Henrique");

    cy.getByDataTest("search-bar").clear();
  });

  it("Deve permitir excluir colaboradores", () => {
    cy.getByDataTest("register-collaborator-button").click();

    cy.getByDataTest("register-collaborator-form")
      .should("exist")
      .find("h1")
      .contains("Preencha os dados para criar o card do colaborador.");

    cy.getByDataTest("name-field").type("Breno Silva Gonçalves");
    cy.getByDataTest("position-field").type("Desenvolvedor Front-end");
    cy.getByDataTest("image-field").type("https://github.com/BrenoDev00.png");
    cy.getByDataTest("team-options").select("Front-End");
    cy.getByDataTest("register-collaborator-form-submit-button").click();

    cy.getByDataTest("register-collaborator-button").click();

    cy.getByDataTest("register-collaborator-form")
      .should("exist")
      .find("h1")
      .contains("Preencha os dados para criar o card do colaborador.");

    cy.getByDataTest("name-field").type("Pedro Henrique");
    cy.getByDataTest("position-field").type("UX Designer");
    cy.getByDataTest("team-options").select("UX e Design");
    cy.getByDataTest("register-collaborator-form-submit-button").click();

    cy.getByDataTest("remove-collaborator-button").first().click();

    cy.getByDataTest("remove-collaborator-modal")
      .should("exist")
      .find("p")
      .contains("Deseja remover o colaborador?");
    cy.getByDataTest("remove-collaborator-modal")
      .find("button")
      .first()
      .click();

    cy.getByDataTest("remove-collaborator-button").first().click();

    cy.getByDataTest("remove-collaborator-modal")
      .find("button")
      .first()
      .click();
  });
});
