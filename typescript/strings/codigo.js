function texto(nombre, apellido) {
    return "Hola, me llamo " + apellido + ", " + nombre + apellido;
}
//Asignamos la variable
var nombre = "James";
var apellido = "Bond";
document.getElementById("contenedor").innerHTML = texto(nombre, apellido);
