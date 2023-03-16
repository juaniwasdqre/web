"use strict"

//event listener
document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-reset").addEventListener("click", reset);
document.querySelector("#borrar-ult").addEventListener("click", borrarUltimo);
document.querySelector("#btn-sortear").addEventListener("click", sortear);

//modelo de datos
let nombres = [];

function agregar() {
    let input = document.querySelector("#nombre");
    let nombre = document.querySelector("#nombre").value;
    
    //agrego un elemento al arreglo
    nombres.push(nombre);
    console.log(nombres);

    //muestro el arreglo
    mostrar();

    //vaciar el input
    input.value = ""; 
}

function mostrar() {
    let lista = document.querySelector(".listado")
    lista.innerHTML = "";

    for (let i=0; i<nombres.length; i++){
        let elemento = nombres [i];
        lista.innerHTML += `<li>${elemento}</li>`; //forma más prolija los `` y ${} para encerrar una variable
    }
    
    // tambien se puede:
    // for (let elementoActual of nombres){
    //     lista.innerHTML += "<li>" + elementoActual + "</li>";
    // }
}

function reset() {
    //vaciamos el arreglo y la lista
    nombres = [];
    mostrar();

    console.log(nombres);
}

function borrarUltimo() {
    //borramos el ult
    nombres.pop();
    mostrar();
    console.log(nombres);
}

function sortear() {
    let random = Math.floor(Math.random()*nombres.length);
    let resultado = document.querySelector("#result");

    // resultado.innerHTML = nombres[random] suficiente (mvp)

    //para el undefined
    if (nombres.length==0){
        resultado.innerHTML = "???? no pusiste nada salame";
    }
    else {
        resultado.innerHTML = nombres[random];
    }
    
    console.log(nombres[random]);
}