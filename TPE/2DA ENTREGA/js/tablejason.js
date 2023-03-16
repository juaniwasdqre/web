document.querySelector("#send-sign").addEventListener("click", send);
document.querySelector("#sendx3").addEventListener("click", send3);
document.querySelector("#delete").addEventListener("click", erase);

let theader = [
    {
        banda: "Banda o Artista",
        cancion: "Canción",
        username: "Usuario",
        date: "Fecha",
    },
];

let table = [
    {
        bandas: "",
        canciones: "",
        usernames: "",
        dates: "",
    },
];

function printHeader() {

    document.querySelector("#printHeader").innerHTML = " ";
    for (const send of theader) {

        document.querySelector("#printHeader").innerHTML += `<tr>
                                                                <td>${send.banda}</td> 
                                                                <td>${send.cancion}</td>
                                                                <td>${send.username}</td>
                                                                <td>${send.date}</td>
                                                            </tr>`
    }
}

function printTable() {

    document.querySelector("#printTable").innerHTML = "";
    for (const send of table) {

        document.querySelector("#printTable").innerHTML += `<tr>
                                                                <td>${send.bandas}</td> 
                                                                <td>${send.canciones}</td>
                                                                <td>${send.usernames}</td>
                                                                <td>${send.dates}</td>
                                                            </tr>`
    }
}

function send(event) {

    event.preventDefault();
    let bandas = document.querySelector("#bandas").value;
    let canciones = document.querySelector("#canciones").value;
    let usernames = document.querySelector("#usernames").value;
    let dates = document.querySelector("#date").value;


    let firma = {
        bandas: bandas,
        canciones: canciones,
        usernames: usernames,
        dates: dates,
    }

    table.push(firma);
    printTable();

}

function send3(event) {

    event.preventDefault();
    let bandas = document.querySelector("#bandas").value;
    let canciones = document.querySelector("#canciones").value;
    let usernames = document.querySelector("#usernames").value;
    let dates = document.querySelector("#date").value;


    let firma = {
        bandas: bandas,
        canciones: canciones,
        usernames: usernames,
        dates: dates,
    }
    table.push(firma);
    table.push(firma);
    table.push(firma);
    printTable();

}

function erase(event) {

    event.preventDefault();
    table = []
    printTable();

}

printTable();
printHeader();
