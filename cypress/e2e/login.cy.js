describe("Login", () => {
  it("Muestra un login valido para el administrador del SIAA", () => {
    cy.visit("/");
    cy.get("#usuario").type("Angy");
    cy.get("#password").type("Alejandra");
    cy.get("#crear-button").click();
    cy.get("#resultado-div").should("contain", "usuario creado");
  });
});
