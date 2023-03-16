"use strict";
//PaLoS = Parking.Lot.System
const url = 'https://64126439f9fe8122ae231390.mockapi.io/parkingsys/palos';
const data = document.querySelector("#userdata");
const unav = document.querySelector("#unav");
const maxCo = 20;

async function obtenerDatos() {
    try {
        let res = await fetch(url); // GET url
        let json = await res.json(); // texto json a objeto
        console.log(json);
        console.log(json.length<maxCo);

        if(json.length<maxCo) {
            // postJson();

            let i = json.length-1;
            let user = json[i];

            printData(json[i]);

        } else {
            unav.classList.toggle("unavailable");
        }


    } catch (error) {
        console.log(error);
    }

}

async function postJson(e){
    e.preventDefault();
    let patente = document.querySelector("#patente").value;
    let carpa = document.querySelector("#carpa").value;
    let cliente = {
        "plate" : patente,
        "tent" : carpa,
    }

    try {
        let response = await fetch(url, {
            "method" : "POST",
            "headers": {"Content-type": "application/json" },
            "body": JSON.stringify(cliente)
        });
        if (response.status === 201) {
            console.log("posted");
        }
    } catch (error) {
        console.log(error);
    }

    obtenerDatos();
}

async function findJson() {
    try {
        let res = await fetch(url); // GET url
        let json = await res.json(); // texto json a objeto
        let patente = document.querySelector("#patente2").value;
        console.log(patente);
        console.log(json);
        let usuario;

        for(let i = 0; i < json.length && json[i].plate != patente; i++){
            usuario = json[i+1];
            console.log(usuario);
        }

        console.log(usuario);
        printData(usuario);

    } catch (error) {
        console.log(error);
    }
}

function printData(user){
    let cochera = user.id;

            data.innerHTML ="";

            data.innerHTML +=   `<tr>
                                    <td>${user.plate}</td>                                                                 
                                    <td>${user.tent}</td>
                                    <td>${user.id}</td>
                                </tr>`;
            // printData(json[i]);

            document.querySelector('#cochera').innerHTML = cochera;
            document.querySelector("#tablausuario").classList.toggle("unavailable");
}

document.querySelector("#consulta").addEventListener("click", postJson);
// obtenerDatos();

document.querySelector("#donde").addEventListener("click", findJson);
