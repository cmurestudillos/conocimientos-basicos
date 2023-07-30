//Objeto Hulk
var hulk = {
    nombre: "Hulk",
    superpoder: "verde",
    smash: function () {
        var _this = this;
        //setTimeout(function(){
        //    console.log(this.nombre + " smash!!!");
        //}, 1500)
        setTimeout(function () {
            console.log(_this.nombre + " smash!!!");
        }, 1500);
    }
};
hulk.smash();
//Objeto Superman
var Superman = {
    nombre: "Superman",
    superpoder: "Superfuerza",
    Superfuerza: function () {
        console.log(this.nombre + " dice: " + hulk.nombre + " es un mierda");
    }
};
Superman.Superfuerza();
