// Importamos Dependencias
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({ selector: 'app-edit', templateUrl: './edit.component.html', styleUrls: ['./edit.component.scss'] })

// Declaracion del componente
export class EditComponent implements OnInit {

  // Declaracion de variables
  exampleForm: FormGroup;
  item: any;
  // Declaracion para msg. de error
  validation_messages = {
   'nombre': [
     { type: 'required', message: 'Nombre Obligatorio.' }
   ]
 };

 // Activamos el servicio de la BBDD, generamos la ruta del registro seleccionado y creamos la instancia del formulario a crear
  constructor(public firebaseService: FirebaseService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }

  // Dentro de ngOninit, obtenemos los datos del registro seleccionado,
  // (datos ya obtenidos con ayuda de la clase EditResolver)
  // para luego realizar la operacion elegida y creamos el formulario
  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    })
  }

  // Metodo createForm(), donde construimos el formulario con los datos y validacion
  // necesaria para realizar la operacion de modificacion
  createForm() {
    this.exampleForm = this.fb.group({
      nombre: [this.item.nombre, Validators.required]
    });
  }

  // Metodo onSubmit(), que envia los datos y realiza la operacion en la BBDD y volvemos
  // a Inicio
  onSubmit(value) {
    this.firebaseService.updatePersonaje(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/home']);
      }
    )
  }

  // Metodo delete(), eliminamos el registro seleccionado mediante el id
  // del registro. Una vez realizada al operacion, volvemos a inicio
  delete() {
    this.firebaseService.deletePersonaje(this.item.id)
    .then(
      res => {
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    );
  }

  // Metodo cancel(), volvemos a la pagina de inicio
  cancel() {
    this.router.navigate(['/home']);
  }

}
