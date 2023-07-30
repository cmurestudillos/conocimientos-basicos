// Importamos Dependencias
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../services/firebase.service';

@Injectable()

export class EditResolver implements Resolve<any> {

  // Activamos el servicio de BBDD
  constructor(public firebaseService: FirebaseService) { }

  // Accedemos a la BBDD para obtener el parametro "id" del registro para la ruta cuando editemos.
  resolve(route: ActivatedRouteSnapshot, ) {
    return new Promise((resolve, reject) => {
      let nombreId = route.paramMap.get('id');
      this.firebaseService.getPersonaje(nombreId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
