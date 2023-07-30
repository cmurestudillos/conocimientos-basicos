import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Articulo } from "./../interface/articulo.interface";
import { map } from "rxjs/operators";
import { ArticuloRequest } from "./../interface/articuloRequest.interface";
const headers = new HttpHeaders({
  "Content-Type": "application/json",
  //Linea imporante
  "Cache-Control": "no-cache"
});
const productosURL: string = "http://localhost:3000/productos";
@Injectable()
export class PeticionService {
  private productos: any[];
  newArticulo: Articulo;

  //Es necesario crear un Sujeto que sera el encargado de inicializar el observable

  constructor(private httpOld: Http, private httpNew: HttpClient) {}

  getProductos() {
    return this.httpOld.get(productosURL).pipe(map(res => res.json()));
  }

  agregarArticulo(artic: ArticuloRequest) {
    let body = JSON.stringify(artic);
    this.httpNew.post(productosURL, body, { headers: headers }).subscribe(
      data => {
        console.log("Insertado");
      },
      error => console.log("No puede crearse.")
    );
  }
}
