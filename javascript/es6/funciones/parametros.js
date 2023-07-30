function saludar (tipo, nombre) {
  var tipo = tipo || "Hola";
  var nombre = nombre || "Carlos";
  return (tipo + ", " + nombre + "!");
}

saludar(); // "Hola, Carlos!"
saludar("Adios"); // "Adios, Carlos!"
saludar("Hasta luego", "Pepe"); // "Hasta luego, Pepe!"
