document.querySelector("#btn-register").addEventListener("click", send);
document.querySelector("#btn-filter").addEventListener("click", filter);



let table = [
    {
        modelo: "",
        color: "",
        precio: "",
        marca: "",
        year: "",
    },
];



function printTable(){

    document.querySelector("#printTable").innerHTML="";
    for (const send of table) {
        for (i=0; i<table.length; i++){
            let chevrolet = table[i];
            if (chevrolet.marca == "chevrolet") {
                document.querySelector("#printTable").innerHTML += `<tr class="resaltado">
                                                                    <td>${chevrolet.modelo}</td>                                                                 
                                                                    <td>${chevrolet.color}</td>
                                                                    <td>${chevrolet.precio}</td>
                                                                    <td>${chevrolet.marca}</td>
                                                                    <td>${chevrolet.year}</td>
                                                                </tr>`
            }
        }
        document.querySelector("#printTable").innerHTML += `<tr>
                                                                <td>${send.modelo}</td>                                                                 
                                                                <td>${send.color}</td>
                                                                <td>${send.precio}</td>
                                                                <td>${send.marca}</td>
                                                                <td>${send.year}</td>
                                                            </tr>`
    }
}

table = [];

function send(event){
    
    event.preventDefault();
    let modelo = document.querySelector("#modelo").value;
    let color = document.querySelector("#color").value;
    let precio = document.querySelector("#precio").value;
    let marca = document.querySelector("#marca").value;
    let year = document.querySelector("#year").value;


    let entrada = {
        modelo: modelo,
        color: color,
        precio: precio,
        marca: marca,
        year: year,

    }
    table.push(entrada);
    printTable();

}

