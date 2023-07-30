// con parentesis
let saludar = function (nombre) {
  return "Hola " + nombre;
};
saludar("Carlos"); // "Hola Carlos"

//sin parentesis
saludar; // Devuelve 'function(nombre) { return "Hola " + nombre };'
