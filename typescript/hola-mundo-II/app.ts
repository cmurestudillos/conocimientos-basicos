function holaMundo(nombre, apellido){
    return "Hola mundo!!, Soy " + nombre + " " + apellido;
}
let nombre = "James";
let apellido = "Bond";
document.getElementById("contenedor").innerHTML = holaMundo(nombre, apellido);