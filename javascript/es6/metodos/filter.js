let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let resultado = miArray.filter(function(elemento) {
  return elemento % 3 === 0;
});
// resultados: [ 3, 6, 9, 12, 15 ]
