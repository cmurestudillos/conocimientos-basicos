//Objeto Hulk
let hulk = {
    nombre: "Hulk",
    superpoder: "verde",
    smash(){
        //setTimeout(function(){
        //    console.log(this.nombre + " smash!!!");
        //}, 1500)
        setTimeout(()=>{console.log(this.nombre + " smash!!!");
    }, 1500);
    }
}
hulk.smash();

//Objeto Superman
let Superman = {
    nombre: "Superman",
    superpoder: "Superfuerza",
    Superfuerza(){
        console.log(this.nombre + " dice: " + hulk.nombre + " es un mierda");
    }
}
Superman.Superfuerza();
