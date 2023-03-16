document.querySelector("#Agregar").addEventListener("click", agregar);
document.querySelector("#btnCrearx3").addEventListener("click", crearx3);
document.querySelector("#BorrarTodo").addEventListener("click", borrartodo);

let encabezado = [
    {
        nombre: "Nombre",
        dia: "Día",
        menu: "Su Menú",
        postre: "Postre",
        pan: "Tipo de Pan",
        sal: "Con sal - Sin sal",

    },
];

let tabla = [
    {
        clientes: "",
        dias: "",
        clientemenú: "",
        clientepostres: "",
        clientepan: "",
        sal: "",
    },
];

function imprimirEncabezado(){

    document.querySelector("#imprimirEncabezado").innerHTML=" ";
    for (const agregar of encabezado) {
       
      document.querySelector("#imprimirEncabezado").innerHTML += `<tr>
                                                                    <td>${agregar.nombre}</td> 
                                                                    <td>${agregar.dia}</td>
                                                                    <td>${agregar.menu}</td>
                                                                    <td>${agregar.postre}</td>
                                                                    <td>${agregar.pan}</td>
                                                                    <td>${agregar.sal}</td>
                                                                  
                                                                
                                                                </tr>`
    }
}

function imprimir(){

    document.querySelector("#imprimirtabla").innerHTML="";
    for (const agregar of tabla) {
       
      document.querySelector("#imprimirtabla").innerHTML += `<tr>
                                                                <td>${agregar.clientes}</td> 
                                                                <td>${agregar.dias}</td>
                                                                <td>${agregar.clientemenú}</td>
                                                                <td>${agregar.clientepostres}</td>
                                                                <td>${agregar.clientepan}</td>
                                                                <td>${agregar.sal}</td>
                                                            </tr>`
    }
}

function agregar(event){
    
    event.preventDefault();
    let clientes = document.querySelector("#clientes").value;
    let dias = document.querySelector("#dias").value;
    let menú = document.querySelector("#menú").value;
    let postres = document.querySelector("#postres").value;
    let pan = document.querySelector("#pan").value;
    let sal = document.querySelector("#sal").value;

    let pedido = {
        clientes: clientes,
        dias: dias,
        clientemenú: menú,
        clientepostres: postres,
        clientepan: pan,
        sal: sal,
    }
    tabla.push(pedido);
    imprimir();

}

function crearx3(event){
    
    event.preventDefault();
    let clientes = document.querySelector("#clientes").value;
    let dias = document.querySelector("#dias").value;
    let menú = document.querySelector("#menú").value;
    let postres = document.querySelector("#postres").value;
    let pan = document.querySelector("#pan").value;
    let sal = document.querySelector("#sal").value;
   
    let pedido = {
        clientes: clientes,
        dias: dias,
        clientemenú: menú,
        clientepostres: postres,
        clientepan: pan,
        sal: sal,
    }
    tabla.push(pedido);
    tabla.push(pedido);
    tabla.push(pedido);
    imprimir();

}

function borrartodo(event){
    
    event.preventDefault();
    tabla = [] 
    imprimir(); 

}

imprimir();
imprimirEncabezado();