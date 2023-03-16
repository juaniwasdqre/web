"use strict"


let togglers = document.querySelectorAll(".reg-btn");
for (let i = 0 ;i < togglers.length; i++) {
    togglers[i].addEventListener("click", function(e) {
        let clickedBtnSibling = this.nextElementSibling;
        clickedBtnSibling.classList.toggle("show")
    });
}



let minNumber = 0;
let maxNumber = 99999999;
let randomNumber = Math.floor(Math.random() * (maxNumber +1 ) + minNumber);



document.querySelector("#captchanumber").addEventListener("click", function(e){
    document.querySelector("#captchadiv").innerHTML = randomNumber;
});



document.querySelector("#sendcaptcha").addEventListener("click", checkCaptcha);


function checkCaptcha() {    

     let inputCaptcha = document.querySelector("#entercaptcha");
     let divResult = document.querySelector("#captcharesult");
        divResult.innerHTML = "";
       
    
      if (inputCaptcha.value == randomNumber) {
  
        let divMessage = document.createElement("p");
         divMessage.innerText = "Correct!";
        divResult.appendChild(divMessage);
        document.querySelector("#entercaptcha").value = '';
  } 
       
     else {         
        let divMessage = document.createElement("p");
        divMessage.innerText = "Try again!";
        divResult.appendChild(divMessage);
        document.querySelector("#entercaptcha").value = '';
       
}
}