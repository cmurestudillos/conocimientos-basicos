//Creacion base de metodos a implementar en la clase "Obligatorios"
interface CocheBase {
    getColor():string;
    getSpeed():number;
}

//Clase coche
class Coche implements CocheBase{
    public color: string;
    public marca: string;
    public speed: number;

    constructor(){
        this.arrancar();
        this.color = "Rojo";
        this.marca = "Seat";
    }

    //Color  
    public getColor():string{
        return this.color;
    }
    public setColor(nuevoColor:string){
        this.color = nuevoColor;
    }
    //Marca
    public getMarca():string{
        return this.marca;
    }
    public setMarca(nuevaMarca:string){
        this.marca = nuevaMarca;
    }
    //Velocidad
    public getSpeed():number{
        return this.speed;
    }
    public setSpeed(nuevoSpeed:number){
        this.speed = nuevoSpeed;
    }
    public acelerar(){
        this.speed++;
    }
    private arrancar(){
        this.speed=0;
    }
}

var miCoche = new Coche();
miCoche.setColor("Rojo");
console.log("Mi coche es de color: " + miCoche.getColor());
miCoche.acelerar();