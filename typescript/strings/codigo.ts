function texto(nombre, apellido) {
    return "Hola, me llamo " + apellido + ", " + nombre + apellido;
}
//Asignamos la variable
let nombre   = "James";
let apellido = "Bond";

document.getElementById("contenedor").innerHTML = texto(nombre, apellido);