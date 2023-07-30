
// Pasando valor
function saludar (nombre) {
  return ("Hola " + nombre + "!");
}

saludar("Carlos"); // Devuelve "Hola Carlos!"

// Sin Pasar valor
function saludar (nombre) {
  return ("Hola " + nombre + "!");
}
saludar(); // Devuelve "Hola undefined!"

// Con Argumentos
function saludar () {
  var tipo = arguments[0];
  var nombre = arguments[1];
  return (tipo + ", " + nombre + "!");
}
saludar("Adios", "Carlos"); // Devuelve "Adios, Carlos!"
