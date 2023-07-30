var Coche = /** @class */ (function () {
    function Coche() {
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (nuevoColor) {
        this.color = nuevoColor;
    };
    return Coche;
}());
var coche = new Coche();
coche.setColor("Rojo");
console.log("El color es " + coche.getColor());
