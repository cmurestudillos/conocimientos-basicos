let miArray = [1, 2, 3, 4];
miArray.forEach(function (elemento, index) {
  console.log("El valor de la posición " + index + " es: " + elemento);
});

// Devuelve lo siguiente
// El valor de la posición 0 es: 1
// El valor de la posición 1 es: 2
// El valor de la posición 2 es: 3
// El valor de la posición 3 es: 4


//Para Arrays
let libro = {
  titulo: "JavaScript",
  autor: "Carlos Mur",
  numPaginas: 100,
  editorial: "cmurestudillos.es",
  precio: "9.99"
};

let propiedades = Object.getOwnPropertyNames(libro);
propiedades.forEach(function(name) {
  let valor = Object.getOwnPropertyDescriptor(libro, name).value;
  console.log("La propiedad " +name+ " contiene: " +valor );
});
// Devuelve:
// La propiedad titulo contiene: JavaScript
// La propiedad autor contiene: Carlos Mur
// La propiedad numPaginas contiene: 100
// La propiedad editorial contiene: cmurestudillos.es
// La propiedad precio contiene: 9.99
