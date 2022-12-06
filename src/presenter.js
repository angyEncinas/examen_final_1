import verificarContrasena from "./login";

const user = document.querySelector("#usuario");
const pass = document.querySelector("#password");
const form = document.querySelector("#login-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const usuario = user.value;
  var password = pass.value;
  var verificacion = verificarContrasena(password);
  if(verificacion == "Valido"){
    div.innerHTML = "<p>" + "usuario creado" + "</p>";
  }
  else{
    div.innerHTML = "<p>" + verificacion + "</p>";
  }

  
});
