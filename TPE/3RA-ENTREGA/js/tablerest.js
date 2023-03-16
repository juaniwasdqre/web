"use strict"
const url = 'https://60db7faf801dcb00172911a1.mockapi.io/api/v1/survey';
const tabla = document.querySelector("#printTable");

async function printTable() {
    // const tabla = document.querySelector("#printTable");
    tabla.innerHTML = "";
    
    try {
        let res = await fetch(url);
        let json = await res.json();
        // console.log(json.length)

        for (let i = 0; i<json.length; i++){
            let pos = json[i];
            document.querySelector("#printTable").innerHTML += `<tr>
                                                                    <td>${pos.genre}</td>                                                                 
                                                                     <td>${pos.username}</td>
                                                                  <td>${pos.country}</td>
                                                                  <td>
                                                                    <button type="button" class="btn-edit" onclick="loadForm(${pos.id})">edit</button></td>
                                                                  <td>
                                                                    <button type="button" class="btn-delete" onclick="deleteElement(${pos.id})">delete</button></td>
                                                                 </tr>`
        }
        console.log(json);
        
    } catch (error) {
        console.log("error");
    }

} 

async function postJson() {
    let genre = document.querySelector("#genero").value;
    let user = document.querySelector("#usernames").value;
    let nationality = document.querySelector("#nation").value;

    let firma = {
        "genre": genre,
        "username": user,
        "country": nationality,
    }

    try {
        let res = await fetch(url, {
            "method": "POST",
            "headers": {"Content-type": "application/json" },
            "body": JSON.stringify(firma) 
        } );
        if (res.status === 201) {
            console.log("posted");
        }
    } catch (error) {
        console.log(error);
    }
    printTable();
    // console.log(json);
}
async function deleteElement(id) {
    try {
        let res = await fetch(url  +'/'+ id, {
            "method": "DELETE", 
        } );
        if (res.status === 200) {
            console.log("eliminado" + id);
        }
    } catch (error) {
        console.log(error);
    }
    printTable();
}

async function loadForm(id) {
    let genre = document.querySelector("#genero").value;
    let user = document.querySelector("#usernames").value;
    let nationality = document.querySelector("#nation").value;

    let firma = {
        "genre": genre,
        "username": user,
        "country": nationality,
    }

    try {
        let res = await fetch(`${url}/${id}`, {
            "method": "PUT",
            "headers": {"Content-type": "application/json" },
            "body": JSON.stringify(firma) 
        } );
        if (res.status === 200) {
            console.log("bien modificado");
        }
    } catch (error) {
        console.log(error);
    }
    printTable();
    // console.log(json);
}

// function createFilter(){
    let filtro = document.querySelector("#tfilter")
    filtro.innerHTML += `<input id="filter" type="text" name="filter" value="" placeholder="filtrar genero"/>
                        <button type="button" id="btn-filter"onclick="filtrarGenero()">Filtrar</button>`
// }
// document.querySelector("#btn-filter").addEventListener("click", filtrarGenero);
// async function filtrarGenero(){
//     try {
//         let res = await fetch(url);
//         let json = await res.json();
//         let filtro = document.querySelector("#filter").value;
//         for (let i = 0; i<json.length; i++){
//             let pos = json[i];
//             let filtroGenero = pos.genre;
//             let trow = document.querySelector(".trow");
//             if ((filtroGenero != filtro)) {
//                 trow.innerHTML = "";
//                 console.log("filtró");
//             }
//         }
//     }
//     catch (error) {
//     console.log("error");
//     }

// }

let filtroUsuario = document.querySelector("#filter").value;

async function filtrarGenero(filtroUsuario) {
    tabla.innerHTML = '';
    
    try {
        let res = await fetch (url); //hace get
        let json = await res.json();
        console.log(json)
        for (let i = 0; i<json.length; i++){
            let pos = json[i];
            let genero = pos.genre;
            let user = pos.username;
            let country = pos.country;
            if (genero == filtroUsuario){

                    tabla.innerHTML += `<tr>
                                        <td>${genero}</td>                                                                 
                                        <td>${user}</td>
                                        <td>${country}</td>
                                        <tr>`;
            }
            else {
                console.log("No hay coincidencia");
            }
        }

    } catch (error) {
        console.log(error)
    }
}


document.querySelector("#send-sign").addEventListener("click", postJson);
printTable();
postJson();
// createFilter();
// document.querySelectorAll(".btn-edit").forEach((button)=> {
//     button.addEventListener("click", loadForm);
// })
// document.querySelectorAll(".btn-delete").forEach((button)=> {
//     button.addEventListener("click", deleteElement);
// })

// onclick="loadForm(${pos.id})"
// onclick="deleteElement(${pos.id})"