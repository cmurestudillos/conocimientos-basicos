let libros = new Inventario('libros');
libros.getNombre();
libros.add("AngularJS", 3);

let comics = new Inventario('comics');
comics.add("The Walking Dead", 10);

function Inventario (nombre) {
  this.nombre = nombre;
  this.articulos = [];
};

Inventario.prototype = {
  add: function (nombre, cantidad) {
    this.articulos[nombre] = cantidad;
  },
  borrar: function (nombre) {
    delete this.articulos[nombre];
  },
  cantidad: function (nombre) {
    return this.articulos[nombre];
  },
  getNombre: function () {
    return this.nombre;
  }
};
