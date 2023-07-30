import { Component, OnInit } from '@angular/core';
import {ArticuloRequest }from 'src/app/interface/articuloRequest';
import {CatalogoService} from 'src/app/servicios/catalogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos:ArticuloRequest[] = [];
  devolucion:string;
  loading:boolean = true;
  public newArticulo: ArticuloRequest;

  constructor(private router:Router, private _catalogoService:CatalogoService) {
   }

  ngOnInit() {
    // lo recogemos del getProductos() del catalogo.service.ts (this.httpOld.get(productosURL).pipe();)
    this._catalogoService.getProductos().subscribe(data=> this.productos = data.json());
  }

  verArticulo( idx:number ){
    this.router.navigate( ['/articulo',idx] );
  }


}
