//Objeto Vengador
let avenger = {
    nombreAven: "Steve,",
    clave: "Captain America,",
    poder: "¿Tiene algun poder?"
}

// let nombreAven = avenger.nombreAven;
// let clave = avenger.clave;
// let poder = avenger.poder;

let {nombreAven, clave, poder} = avenger;

//console.log(nombreAven, clave, poder);
//console.log(avenger);
console.log(avenger.nombreAven, avenger.clave, avenger.poder);

//let avengerRevenge:Array<string> 
let avengerRevenge:string[] = ["Thor", "Hulk", "Ironman"];
let [ Thor, Hulk, Ironman] = avengerRevenge;
//let [ , , Ironman] = avengerRevenge;
console.log(Thor, Hulk, Ironman);