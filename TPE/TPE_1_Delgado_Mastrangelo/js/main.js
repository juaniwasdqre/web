"use strict"

//Trae el boton del captcha "Are you a robot?"" reacciona al click para activar funcion toggleDiv
document.querySelector("#captchabtn").addEventListener("click", toggleDiv);


// Funcion para abrir div con captcha

function toggleDiv() { 
    //Variable que checkea si el div que contiene el captcha tiene la clase captcha cerrado o no
    let captchaOpenOrClosed = document.querySelector("#captcha").classList.contains("captchacerrado");
    //Devuelve un booleano
    console.log(captchaOpenOrClosed); 
    //Si devuelve true abre el div insertando la clase correspondiente
    if (captchaOpenOrClosed) { 
        document.querySelector("#captcha").classList.add("captchaabierto");
        document.querySelector("#captcha").classList.remove("captchacerrado");       
    } 
    //Si devuelve false cierra el div
    else {
        document.querySelector("#captcha").classList.remove("captchaabierto"); 
        document.querySelector("#captcha").classList.add("captchacerrado");                    
    }             
   
}
//Trae el boton de generar captcha 

document.querySelector("#captchanumber").addEventListener("click", insertRandomNumber);

//Creamos el numero aleatorio con esta operacion
let minNumber = 0;
let maxNumber = 99999999;
let randomNumber = Math.floor(Math.random() * (maxNumber +1 ) + minNumber);

//Funcion que inserta el numero aleatorio en el html para que el usuario pueda verlo

function insertRandomNumber() {
    document.querySelector("#captchadiv").innerHTML = randomNumber;  
    return randomNumber 
}

//Traemos el boton que envia el captcha ingresado por el usuario en el input
document.querySelector("#sendcaptcha").addEventListener("click", checkCaptcha);

//Funcion que revisa si el captcha es correcto
function checkCaptcha() {    
    //declaramos que inputCaptcha es el valor ingresado por el usuario y que divResult es donde
    //se imprimira el mensaje de correcto o no
     let inputCaptcha = document.querySelector("#entercaptcha");
     let divResult = document.querySelector("#captcharesult");
        divResult.innerHTML = "";
        //si el valor ingresado por el usuario es igual al de la operacion imprima correct!
    
      if (inputCaptcha.value == randomNumber) {
  
        let divMessage = document.createElement("p");
         divMessage.innerText = "Correct!";
        divResult.appendChild(divMessage);
        document.querySelector("#entercaptcha").value = '';
  } 
        //si el valor ingresado por el usuario es distinto imprima try again!
     else {         
        let divMessage = document.createElement("p");
        divMessage.innerText = "Try again!";
        divResult.appendChild(divMessage);
        document.querySelector("#entercaptcha").value = '';
        //en ambos casos limpie el imput
}
}