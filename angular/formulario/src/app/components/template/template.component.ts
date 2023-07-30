import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

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

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises = [
  {
    codigo: "ESP",
    nombre: "España"
  },
  {
    codigo: "GLZ",
    nombre: "Miña terra galega"
  },
  {
    codigo: "MRT",
    nombre: "Marte"
  }]

  sexos:string[] = ["Hombre","Mujer","Sin definir"]

  constructor() { }


  guardar( forma:NgForm ){

    console.log("ngForm ",forma );
    console.log("Valor forma", forma.value  );
    console.log("Usuario", this.usuario );

  }

}
