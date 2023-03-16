document.querySelector("#btn-compra1").addEventListener("click", compra1);
document.querySelector("#btn-compra2").addEventListener("click", compra2);
document.querySelector("#btn-compra3").addEventListener("click", compra3);

/*
Producto
Harina - 1
Huevos - 3
Frutillas - 2
*/

let listado = [];

function compra1() {
    let producto = document.querySelector("#producto").value;
    let newItem = {
        producto : producto,
        cantidad : 1,
    }
    listado.push(newItem);
    pushList();
}

function compra2() {
    let producto = document.querySelector("#producto").value;
    let newItem = {
        producto : producto,
        cantidad : 2,
    }
    listado.push(newItem);
    pushList();
}

function compra3() {
    let producto = document.querySelector("#producto").value;
    let newItem = {
        producto : producto,
        cantidad : 3,
    }
    listado.push(newItem);
    pushList();
}

function pushList () {
    console.table(listado);
    let listadoDom = document.querySelector("#listado");
    listadoDom.innerHTML = '';

    for (const item of listado) {
        listadoDom.innerHTML += `<div class="item">
                                    ${item.cantidad} ${item.producto}
                                </div>`;
    }
}