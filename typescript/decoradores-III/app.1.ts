import { Programa } from "./app"

var prueba = new Programa;

function calculo(param1:number, param3:boolean, param2?:number,){
    if(param3){
        if(param3 != undefined){
            return param1 * param1;
        }
    }else{
        console.log("No se puede realizar el calculo");
    }
    
}

var resultado = calculo(4, true, 7);