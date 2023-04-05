// 10. Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
// devuelve si ese mes tiene 30 o 31 días.

function Month(mes) {
    if((mes>0)&&(mes<=12)) {
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
    } else {
        console.log("inserte un numero valido xfavor");
    }
}

Month(24);