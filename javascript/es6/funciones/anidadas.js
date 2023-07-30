let a = "Hola";

function global () {
  var b = "K";
  function local () {
    var c = "Asé";
    return a + b + c;
  }
  return local;
}

global(); // Devuelve la función local: "function local() { var c ="Asé"...""
global()(); // Devuelve la ejecución de la función local: "HolaKAsé"

var closure = global();
closure(); // Devuelve lo mismo que global()(): "HolaKAsé"
