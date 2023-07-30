class Coche{
    public color: string;
    public marca: string;
    public velocidad: number;
    public esDeportivo: boolean;

    public getColor(){
        return this.color;
    }
    
    public setColor(nuevoColor:string){
        this.color = nuevoColor;
    }
}
var coche = new Coche();
coche.setColor("Rojo");
console.log("El color es " + coche.getColor());