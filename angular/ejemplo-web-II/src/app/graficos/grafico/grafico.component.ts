import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {

  grafico:Object = {
    nombre: ""
  }

  tpgraficos = [
    {
      codigo: "BAR",
      nombre: "Barra"
    },
    {
      codigo: "RAD",
      nombre: "Radar"
    }]

  constructor() { }

  mostrar( ){
    console.log("Grafico", this.grafico);

  }

}
