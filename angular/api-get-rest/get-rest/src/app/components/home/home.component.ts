import { Component, OnInit } from '@angular/core';
import { PeticionService } from "../../servicios/peticion.service";
import { Articulo } from 'src/app/interface/articulo.interface';
import {ArticuloRequest }from 'src/app/interface/articuloRequest.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  productos:any[] = [];
  devolucion:string;
  loading:boolean = true;
  public newArticulo: ArticuloRequest;

  constructor(private _productosService:PeticionService) { 

    this._productosService.getProductos()
        .subscribe( data =>{
          console.log(data);
          this.productos = data;
          this.loading = false;
          this.devolucion = JSON.stringify(this.productos)
        })
      
  }
  ngOnInit() {
  }
  insertarArticulo(){
    this.newArticulo = new ArticuloRequest(
      7,
      "nombreArticulo",
      "bioArticulo",
      "assets/img/nombreImg.png",
      "precioArticulo",
      "alergenoArticulo");
    console.log(this.newArticulo);
    this._productosService.agregarArticulo(this.newArticulo);
  }

}
