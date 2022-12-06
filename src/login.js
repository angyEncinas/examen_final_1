function verificarContrasena(password) {
  var resultado = " ";
  var tamaño = password.length;
  if(password == " " || password == ""){
    resultado = "La contraseña no debe ser nula";
  }
  else{
    if(tamaño > 8){
      resultado = "Valido";
    }
    else{
      resultado = "La contraseña debe tener mas de 8 caracteres";
    }
  }
  
  return resultado;
}

export default verificarContrasena;
