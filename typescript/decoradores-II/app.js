var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Decoradores
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
var Software;
(function (Software) {
    //Clase programa
    var Programa = /** @class */ (function () {
        function Programa() {
        }
        //Nombre  
        Programa.prototype.getNombre = function () {
            return this.nombre;
        };
        Programa.prototype.setNombre = function (nuevoNombre) {
            this.nombre = nuevoNombre;
        };
        //Version  
        Programa.prototype.getVersion = function () {
            return this.version;
        };
        Programa.prototype.setVersion = function (nuevaVersion) {
            this.version = nuevaVersion;
        };
        return Programa;
    }());
    Software.Programa = Programa;
})(Software || (Software = {}));
var IDE = /** @class */ (function (_super) {
    __extends(IDE, _super);
    function IDE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IDE.prototype.getCodigo = function () {
        return this.codigo;
    };
    IDE.prototype.setCodigo = function (nuevoCodigo) {
        this.codigo = nuevoCodigo;
    };
    IDE.prototype.getAllData = function () {
        return (this.getNombre() +
            " - " + this.getVersion() +
            " - " + this.getCodigo());
    };
    return IDE;
}(Programa));
var miIde = new IDE();
var miPrograma = new Programa();
miPrograma.lanzamiento();
// accediendo a una clase export
var ProgramaInformatico = Software.Programa;
var cargarSoftware = new ProgramaInformatico();
