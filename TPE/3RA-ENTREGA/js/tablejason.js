document.querySelector("#send-sign").addEventListener("click", send);
document.querySelector("#sendx3").addEventListener("click", send3);
document.querySelector("#delete").addEventListener("click", erase);



let table = [
    {
        genre: "",
        usernames: "",
        nationality: "",
    },
];



function printTable(){

    document.querySelector("#printTable").innerHTML="";
    for (const send of table) {
       
      document.querySelector("#printTable").innerHTML += `<tr>
                                                                <td>${send.genre}</td>                                                                 
                                                                <td>${send.usernames}</td>
                                                                <td>${send.nationality}</td>
                                                            </tr>`
    }
}

table = [];

function send(event){
    
    event.preventDefault();
    let genre = document.querySelector("#genero").value;
    let usernames = document.querySelector("#usernames").value;
    let nationality = document.querySelector("#nation").value;


    let firma = {
        genre: genre,
        usernames: usernames,
        nationality: nationality,

    }
    // table = [];
    table.push(firma);
    printTable();

}

function send3(event){
    
    event.preventDefault();
    let genre = document.querySelector("#genero").value;
    let usernames = document.querySelector("#usernames").value;
    let nationality = document.querySelector("#nation").value;


    let firma = {
        genre: genre,
        usernames: usernames,
        nationality: nationality,

    }
    table.push(firma);
    table.push(firma);
    table.push(firma);
    printTable();

}

function erase(event){
    
    event.preventDefault();
    table = []; 
    printTable();

}

