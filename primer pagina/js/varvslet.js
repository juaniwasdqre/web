"use strict"

console.log ("Con var");
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0)
}

// console.log ("Con let");
// for (let i = 0; i < 5; i++) {
//     setTimeout (function () {
//         console.log(i);
//     }, 0)
// }