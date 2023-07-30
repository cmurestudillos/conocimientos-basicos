// Variables
let coche1 = { marca: "Seat", modelo: "Ibiza" };
let coche2 = { marca: "Seat", modelo: "Ibiza"};

coche1 === coche2;               // Devuelve false, no comparten referencia
coche1.modelo === coche2.modelo; // Devuelve true porque el valor es el mismo.

let coche3 = coche1;
coche1 === coche3;               // Devuelve true, comparten referencia
