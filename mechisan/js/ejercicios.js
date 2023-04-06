// // 10. Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
// // devuelve si ese mes tiene 30 o 31 días.

// function Month(mes) {
//     switch(mes) {
//         case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//             console.log("31 dias");
//             break;
//         case 2:
//             console.log("omg encontraste a febrero, es unico en su clase! este año tuvo 28 dias");
//             break;
//         case 4: case 6: case 9: case 11:
//             console.log("30 dias");
//             break;
//         default:
//             console.log("inserte un numero valido xfavor");
//     }
// }

// Month(24);

// 11. Crear un script que genere una pirámide como el ejemplo con los números del 1 al
// número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):

function Piramide(numerito) {
    if((numerito>0)&&(numerito<=10)) {
        let rta = "";
        for(let i = 1; i<=numerito; i++) {
            rta += i.toString();
            console.log(rta);
        }
    } else {
        console.log("inserte un numero valido entre 0 y 10");
    }
}

Piramide(10);

// 12. Generar una función donde ingresen dos números, el primero corresponde a la
// cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
// colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
// disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola.

function Bultos(stock, enCaja) {
    let cajaFull = ~~(stock / enCaja);
    let bultoSuelto = (stock % enCaja);

    console.log("Podrian llenarse "+cajaFull+" caja(s) con los bultos que tenes en stock");
    console.log("Te quedaron "+bultoSuelto+" bulto(s) sueltos");
}

Bultos(8, 3);

// 13. Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
// Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
// Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
// través de su código y el script saca el descuento correspondiente por la consola.

function Descuento(code) {
    switch(code) {
        case "fiesta":
            console.log("tu descuento es del 5%!!");
            break;
        case "focus":
            console.log("tu descuento es del 10%!!!");
            break;
        default:
            console.log("mm no tenemos un descuento para ese codigo :( \n segui participando wachinn");
    }
}

Descuento("toyota");

function Descuento(codigo) {
    if(codigo=="fiesta") {
        console.log("5%");
    } else if(codigo=="focus") {
        console.log("10%");
    } else {
        console.log(null);
    }
}

Descuento("fiesta");