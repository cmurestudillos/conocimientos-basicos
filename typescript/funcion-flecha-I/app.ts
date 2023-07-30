function devuelveNumero(num:number){
    var nuevoNumero = num + num;
    return nuevoNumero;
}  

function devuelveStringNumero(num:string):number{
    if(Number(num)){
        return Number(num);
    }else{
        return NaN;
    }
}

function isString(text:any):boolean{
    if(String(text)){
        return true;
    }else{
        false;
    }
}

//Funciones flecha
//Hacen lo mismo
//Opcion 1
let miFuncion = function(a){
    return a;
}

let miFuncionF = a=> a;
console.log(miFuncion("normal"));
console.log(miFuncionF("flecha"));

//Opcion 2
let miFuncion2 = function(a:number, b:number){
    return a+b;
}

let miFuncionF2 = (a:number, b:number) => a+b;
console.log(miFuncion2(3, 6));
console.log(miFuncionF2(6, 3));

//Opcion 3
let miFuncion3 = function(nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncionF3 = (nombre:string) =>{
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3("audi"));
console.log(miFuncionF3("audi"));

