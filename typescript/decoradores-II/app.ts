

//Decoradores
function arranque(lanzar: string){
    return function(target: Function){
        target.prototype.lanzamiento = function():void{
            alert(lanzar);
        }
    }
}

@arranque('Lanzamiento del nodeJS y Angular')

export module Software{
    //Clase programa
    export class Programa{
        public nombre: string;
        public version: number;

        //Nombre  
        public getNombre():string{
            return this.nombre;
        }
        public setNombre(nuevoNombre:string){
            this.nombre = nuevoNombre;
        }
        //Version  
        public getVersion():number{
            return this.version;
        }
        public setVersion(nuevaVersion:number  ){
            this.version = nuevaVersion;
        }    
    }
}
class IDE extends Programa{
    public codigo:string;
    getCodigo(){
        return this.codigo;
    }
    setCodigo(nuevoCodigo:string){
        this.codigo = nuevoCodigo;
    }   
    getAllData():string{
        return(
            this.getNombre() +
            " - " + this.getVersion() +
            " - " + this.getCodigo()
        );
    } 
}

var miIde = new IDE();
var miPrograma = new Programa();

miPrograma.lanzamiento();

// accediendo a una clase export
import ProgramaInformatico = Software.Programa;
let cargarSoftware = new ProgramaInformatico();