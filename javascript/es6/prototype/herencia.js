//Creacion de la clase
class Vehiculo {
  constructor (tipo, nombre, ruedas) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.ruedas = ruedas
  }
  getRuedas () {
    return this.ruedas
  }
  arrancar () {
    console.log(`Arrancando el ${this.nombre}`)
  }
  aparcar () {
    console.log(`Aparcando el ${this.nombre}`)
  }
}
//Creacion de otra clase heredando  los metodos de vehiculo
class Coche extends Vehiculo {
  constructor (nombre) {
    super('coche', nombre, 4)
  }
}

//Utilizacion
let seatIbiza = new Coche('Ibiza Seat')
seatIbiza.getRuedas() // 4
seatIbiza.arrancar() // Arrancando el Ibiza Seat
