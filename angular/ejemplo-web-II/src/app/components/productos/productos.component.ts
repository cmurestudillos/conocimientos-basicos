import { Component, OnInit } from '@angular/core';
import { ProductosService, Articulo } from '../../servicios/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos:Articulo[] = [];

  constructor( private _productosService:ProductosService,
               private router:Router
                ) {
  }

  ngOnInit() {
    this.productos = this._productosService.getProductos();
  }

  verArticulo( idx:number ){
    this.router.navigate( ['/articulo',idx] );
  }

}
