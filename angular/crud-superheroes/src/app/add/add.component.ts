// Importamos Dependencias
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({ selector: 'app-add', templateUrl: './add.component.html', styleUrls: ['./add.component.scss'] })

// Declaracion del componente
export class AddComponent implements OnInit {

  // Decaracion de variables
  exampleForm: FormGroup;
  // Declaracion para msg. de error
  validation_messages = {
   'nombre': [
     { type: 'required', message: 'Nombre Obligatorio.' }
   ]
 };

 // Activamos el servicio de la BBDD, generamos la ruta del registro seleccionado y creamos la instancia del formulario a crear
  constructor(public firebaseService: FirebaseService, private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  // Dentro de ngOninit, llamamos el metodo createform() para construir el formulario
  ngOnInit() {
    this.createForm();
  }

  // Metodo createForm(), donde construimos el formulario inicializado
  createForm() {
    this.exampleForm = this.fb.group({
      nombre: ['', Validators.required ]
    });
  }
  
  // Metodo onSubmit(), que envia los datos y realiza la operacion en la BBDD y volvemos
  // a Inicio
  onSubmit(value) {
    this.firebaseService.addPersonaje(value)
    .then(
      res => {
        this.router.navigate(['/home']);
      }
    );
  }

}
