function verificarContrasena(password) {
  var resultado = "No valido";
  if(password.length > 8){
    resultado = "Valido";
  }
  return resultado;
}

export default verificarContrasena;
