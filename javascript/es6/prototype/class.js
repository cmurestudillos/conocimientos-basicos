//Declaracion
class Inventario {
  constructor(nombre) {
    this.nombre = nombre;
    this.articulos = [];
  }
  add (nombre, cantidad) {
    this.articulos[nombre] = cantidad;
  }
  borrar (nombre) {
    delete this.articulos[nombre]
  }
  cantidad (nombre) {
    return this.articulos[nombre]
  }
  getNombre () {
    return this.nombre;
  }
}

//utilizacion
let libros = new Inventario("Libros");
libros.add("AngularJS", 3);
libros.add("JavaScript", 10);
libros.add("NodeJS", 5);
libros.cantidad("AngularJS"); // 3
libros.cantidad("JavaScript"); // 10
libros.borrar("JavaScript");
libros.cantidad("JavaScript"); // undefined
