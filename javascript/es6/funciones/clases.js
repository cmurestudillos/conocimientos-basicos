//Una vez construida la closure/clases

function inventario (nombre) {
  let _nombre = nombre;
  let _articulos = {};
  function add (nombre, cantidad) {
    _articulos[nombre] = cantidad;
  }
  function borrar (nombre) {
    delete _articulos[nombre];  
  }
  function cantidad (nombre) {
    return _articulos[nombre];
  }
  function nombre () {
    return _nombre;
  }
  return {
  
  add: add,
  borrar: borrar,
  cantidad: cantidad,
  nombre: nombre  
  }
}

//Podemos utilizar los siguientes metodos
var libros = inventario("libros");
libros.add("AngularJS", 3);
libros.add("JavaScript", 10);
libros.add("NodeJS", 5);
libros.cantidad("AngularJS"); // 3
libros.cantidad("JavaScript"); // 10
libros.borrar("JavaScript");
libros.cantidad("JavaScript"); // undefined
