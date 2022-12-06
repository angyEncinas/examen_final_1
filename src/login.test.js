import verificarContrasena from "./login.js";

describe("Verificar contraseña", () => {
  it("deberia tener mas de 8 caracteres", () => {
    expect(verificarContrasena("alejandra")).toEqual("Valido");
  });
  it("No deberia tener mas de 8 caracteres", () => {
    expect(verificarContrasena("ale")).toEqual("La contraseña debe tener mas de 8 caracteres");
  });
});
