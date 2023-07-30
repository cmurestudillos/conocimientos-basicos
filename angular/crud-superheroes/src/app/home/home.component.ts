// Importamos Dependencias
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router, Params } from '@angular/router';

@Component({ selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss'] })

export class HomeComponent implements OnInit {

  // Declaramos las variables
  searchValue = '';
  items: Array<any>;
  nombre_filtered_items: Array<any>;

  constructor( public firebaseService: FirebaseService, private router: Router ) { }

  // Dentro de ngOninit, llamamos al metodo getData
  ngOnInit() {this.getData(); }

  // En el método getData(), se listan los datos y cada vez que haya cambios en la base de
  // datos, mostrara dichos cambios
  getData() {
    this.firebaseService.getAll()
    .subscribe(result => {
      this.items = result;
      this.nombre_filtered_items = result;
    });
  }

  // Metodo viewDetails(), nos muestra los detalles del registro seleccionado
  viewDetails(item) {
    this.router.navigate(['/details/' + item.payload.doc.id]);
  }

  // capitalizeFirstLetter(value) {
  //   return value.charAt(0).toUpperCase() + value.slice(1);
  // }

  // Metodo searchByNombre(), busca en la BBDD el valor que vamos intruduciendo en el input.
  // y va mostrando las coincidencias que encuentra
  searchByNombre() {
    let value = this.searchValue.toLowerCase();
    this.firebaseService.searchPersonajes(value)
    .subscribe(result => {
      this.nombre_filtered_items = result;
      this.items = this.combineLists(result, this.nombre_filtered_items);
    });
  }
  
  combineLists(a, b){
    let result = [];

    a.filter(x => {
      return b.filter(x2 =>{
        if (x2.payload.doc.id == x.payload.doc.id){
          result.push(x2);
        }
      });
    });
    return result;
  }
}
