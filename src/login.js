function verificarContrasena(password) {
  var resultado = " ";
  var tamaño = password.length;
  var primerCaracter = password.charAt(0);
  var conversionAMayuscula = primerCaracter.toUpperCase();
  if(password == " " || password == ""){
    resultado = "La contraseña no debe ser nula";
  }
  else{
    if(tamaño > 8 && primerCaracter == conversionAMayuscula){
      resultado = "Valido";
    }
    else if(tamaño < 8) {
      resultado = "La contraseña debe tener mas de 8 caracteres";
    }
    else if( primerCaracter != conversionAMayuscula){
      resultado = "La contraseña debe al menos una letra mayuscula";
    }
  }
  
  return resultado;
}

export default verificarContrasena;
