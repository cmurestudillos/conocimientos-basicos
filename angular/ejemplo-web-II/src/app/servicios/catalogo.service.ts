import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ArticuloRequest } from "./../interface/articuloRequest";
const headers = new HttpHeaders({
  "Content-Type": "application/json",
  "Cache-Control": "no-cache"
});
const productosURL: string = "http://localhost:3000/productos";


@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class CatalogoService{

  constructor(private httpOld: Http, private httpNew: HttpClient) {
    
   }
   getProductos() {
    return this.httpOld.get(productosURL).pipe();
  }
}
