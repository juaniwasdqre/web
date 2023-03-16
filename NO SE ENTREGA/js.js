let btnEnviar = document.getElementById("send");

btnEnviar.addEventListener("click", function(){
  // Verificar que lo que escribió el usuario sea igual a 8
  //Primero busco el input
  let inputCaptcha = document.getElementById("captcha");
  //Verifico el dato
  let divResultado = document.getElementById("resultado");
  if (inputCaptcha.value == 8) {
    //El dato es igual a 8
    //alert("esta bien");
    //divResultado.innerText = "Mensaje enviado";

    let encabezado = document.createElement("h1");
    encabezado.innerText = "Mensaje Enviado";
    divResultado.appendChild(encabezado)
  } else {
    // El dato es distinto a 8
    //alert("esta mal");
    //divResultado.innerHTML = "Captcha incorrecto"
    let link = document.createElement("a");
    link.innerText = "Ir a google";
    link.href = "www.google.com";
    divResultado.appendChild(link);
    
  }
});
