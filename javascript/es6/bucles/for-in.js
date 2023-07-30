let libro = {
  titulo: "JavaScript",
  autor: "Carlos Mur",
  numPaginas: 100,
  editorial: "cmurestudillos.es",
  precio: "9.99"
};

for(let prop in libro) {
  console.log("La propiedad " +prop+ " contiene: " +libro[prop] );
}

// Devuelve:
// La propiedad titulo contiene: JavaScript
// La propiedad autor contiene: Carlos Mur
// La propiedad numPaginas contiene: 100
// La propiedad editorial contiene: cmurestudillos.es
// La propiedad precio contiene: 9.99
