var HolaMundo = /** @class */ (function () {
    function HolaMundo(firstWord, secondWord) {
        this.firstWord = firstWord;
        this.secondWord = secondWord;
        this.fullName = firstWord + " " + secondWord;
    }
    return HolaMundo;
}());
function greeter(mensaje) {
    return mensaje.firstWord + " " + mensaje.secondWord;
}
var mensaje = new HolaMundo("Hola", "Mundo");
document.body.innerHTML = greeter(mensaje);
