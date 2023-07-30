import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  //todo lo invalido, tendra un borde rojo
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  artik:Object = {
    id: null,
    nombre: null,
    bio: null,
    img: null,
    precio: null,
    alergeno: ""
  }

  alergenos = [
  {
    codigo: "MOL",
    nombre: "Molusco"
  },
  {
    codigo: "FRE",
    nombre: "Free"
  },
  {
    codigo: "GLU",
    nombre: "Gluten"
  },
  {
    codigo: "LAC",
    nombre: "Lacteo"
  }]

  constructor() { }

 
  guardar( forma:NgForm ){
    //console.log("ngForm ",forma );
    //console.log("Valor forma", forma.value  );
    console.log("Articulo", this.artik);

  }

}
