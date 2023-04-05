// 10. Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
// devuelve si ese mes tiene 30 o 31 días.

function Month(mes) {
    switch(mes) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            console.log("31 dias");
            break;
        case 2:
            console.log("omg encontraste a febrero, es unico en su clase! este año tuvo 28 dias");
            break;
        case 4: case 6: case 9: case 11:
            console.log("30 dias");
            break;
        default:
            console.log("inserte un numero valido xfavor");
    }
}

Month(24);

// 11. Crear un script que genere una pirámide como el ejemplo con los números del 1 al
// número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):

function Piramide(numerito) {
    if((numerito>0)&&(numerito<=10)) {
        let rta = null;
        for(let i = 1; i<=numerito; i++) {
            rta += i.toString();
            console.log(rta);
        }
    } else {
        console.log("inserte un numero valido entre 0 y 10")
    }
}

Piramide(4);