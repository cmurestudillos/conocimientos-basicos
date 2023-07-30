// String con el texto "javascript"
"javascript"[2] // Acceso como array, devuelve el tercer carácter "v", ya que la primera posición "javascript".length() 
"javascript".charCodeAt(2) // Devuelve el caracter en formato UNICODE de "v", el 118
"javascript".indexOf("script"); // Devuelve el índice donde comienza el string "script", el 4
"javascript".substring(4,10); // Devuelve la parte del string comprendida entre los indices

var texto = "Hola Mundo";
var texto = new String("Hola Mundo");

var fecha = new Date();
fecha = fecha.toString(); // "Wed May 20 2015 20:16:25 GMT+0200 (CEST)"
fecha = fecha.split(" "); // ["Wed", "May", "20", "2015", "20:16:25", "GMT+0200", "(CEST)"]
fecha[4]; // "20:16:25"
