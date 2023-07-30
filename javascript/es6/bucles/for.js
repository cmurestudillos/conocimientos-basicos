//ejemplo basico
for (let i=1; i < 11; i++) {
  console.log(i);
}
// Devuelve: 1 2 3 4 5 6 7 8 9 10

//Optimizacion del bucle
console.time('inicio');
let unArray = objeto.unArray;
for (var i=0, longitud=unArray.length; i<longitud; i++) {
  unArray[i] = "Hola!";
}
console.end('fin');

