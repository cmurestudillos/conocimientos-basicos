import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Angular";
  nombre2 = "curSo dE aNgulAr";

  array = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  articulo = {
    nombre: "Patatas",
    marca: "Lays",
    precio: 1.10,
    tiendas:{
      id: "4121",
      nombre: "Dia Santiago"
    }
  };

  valorDePromesa = new Promise(  ( resolve, reject )=>{

    setTimeout( ()=>resolve('LLego el data!'), 3500 );

  });

  fecha = new Date();

  video = "oHg5SJYRHA0";

  activar:boolean = true;
}
