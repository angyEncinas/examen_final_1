import verificarContrasena from "./login.js";

describe("Verificar contraseña", () => {
  it("deberia tener mas de 8 caracteres", () => {
    expect(verificarContrasena("Alejandra")).toEqual("Valido");
  });
  it("No deberia tener mas de 8 caracteres", () => {
    expect(verificarContrasena("ale")).toEqual("La contraseña debe tener mas de 8 caracteres");
  });
  it("No debe ser nula", () => {
    expect(verificarContrasena(" ")).toEqual("La contraseña no debe ser nula");
  });
  it("Deberia tener una mayuscula", () => {
    expect(verificarContrasena("Alejandra")).toEqual("Valido");
  });
  it("No deberia tener una mayuscula", () => {
    expect(verificarContrasena("alejandra")).toEqual("La contraseña debe al menos una letra mayuscula");
  });
});
