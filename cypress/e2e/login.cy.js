describe("Login", () => {
  it("Muestra un login valido para el administrador del SIAA", () => {
    cy.visit("/");
    cy.get("#usuario").type("Angy");
    cy.get("#password").type("Alejandra");
    cy.get("#crear-button").click();
    cy.get("#resultado-div").should("contain", "usuario creado");
  });
  it("Muestra un login no valido para el administrador del SIAA", () => {
    cy.visit("/");
    cy.get("#usuario").type("Angy");
    cy.get("#password").type("alejandra");
    cy.get("#crear-button").click();
    cy.get("#resultado-div").should("contain", "La contraseña debe tener al menos una letra mayuscula");
  });
  it("Muestra un login no valido 2 para el administrador del SIAA", () => {
    cy.visit("/");
    cy.get("#usuario").type("Angy");
    cy.get("#password").type(" ");
    cy.get("#crear-button").click();
    cy.get("#resultado-div").should("contain", "La contraseña no debe ser nula");
  });
});
