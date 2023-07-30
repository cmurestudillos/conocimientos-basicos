"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
//Decoradores
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
var Programa = /** @class */ (function () {
    //Clase programa
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
    Programa = __decorate([
        arranque('Lanzamiento del curso de nodeJS y Angular')
        //Clase programa
    ], Programa);
    return Programa;
}());
exports.Programa = Programa;
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
