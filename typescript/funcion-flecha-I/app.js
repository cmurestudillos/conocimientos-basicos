function devuelveNumero(num) {
    var nuevoNumero = num + num;
    return nuevoNumero;
}
function devuelveStringNumero(num) {
    if (Number(num)) {
        return Number(num);
    }
    else {
        return NaN;
    }
}
function isString(text) {
    if (String(text)) {
        return true;
    }
    else {
        false;
    }
}
//Funciones flecha
//Hacen lo mismo
//Opcion 1
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
console.log(miFuncion("normal"));
console.log(miFuncionF("flecha"));
//Opcion 2
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncionF2 = function (a, b) { return a + b; };
console.log(miFuncion2(3, 6));
console.log(miFuncionF2(6, 3));
//Opcion 3
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncionF3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3("audi"));
console.log(miFuncionF3("audi"));
