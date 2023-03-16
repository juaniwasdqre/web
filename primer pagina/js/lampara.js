document.getElementById("btn-prender").addEventListener("click", prender);
document.getElementById("btn-apagar").addEventListener("click", apagar);
apagar();

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
    // document.getElementById("fondo").classList.remove("prendido");
    document.getElementById("fondo").classList.add("apagado");
}