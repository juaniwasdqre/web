
let contador = 0;

// console.log("A");

function contarClicks(){
    console.log("B");
    // contador = contador + 1;
    contador++;
    document.querySelector("#conteo").innerHTML = contador;
    console.log("C");
} //<--asesino de variables

// console.log("D");

document.getElementById("btn-prender").addEventListener("click", prender);
document.getElementById("btn-apagar").addEventListener("click", apagar);
// apagar();

function prender(){
    //1. Cambiar foto
    document.getElementById("img-lampara").src = "img/lampon.png";
    //2. Cambiar fondo de la pagina
    document.getElementById("fondo").classList.remove("apagado");
    document.getElementById("fondo").classList.add("prendido");
}

function apagar(){
    //1. Cambiar foto
    document.getElementById("img-lampara").src = "img/lampoff.png";
    //2. Cambiar fondo de la pagina
    document.getElementById("fondo").classList.remove("prendido");
    document.getElementById("fondo").classList.add("apagado");
}

// let a=4;

// function suma(){
//     let b = 2;
//     let c = a+b;
//     console.log(c);
// }

// suma();
// a=c+a;
// console.log(a);