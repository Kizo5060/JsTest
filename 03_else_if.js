"use strict";

/*
MICRO TASK 3 – if / else if / else

Užpildyk dvi sąlygas:

> 0  → "Teigiamas"
< 0  → "Neigiamas"
kitu atveju → "Nulis"
*/

function checkNumber(number) {
    if (/* pirma sąlyga */) {
        return "Teigiamas";
    } else if (/* antra sąlyga */) {
        return "Neigiamas";
    } else {
        return "Nulis";
    }
}

console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));
