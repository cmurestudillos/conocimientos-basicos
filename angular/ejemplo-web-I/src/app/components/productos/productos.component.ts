import { Component, OnInit } from '@angular/core';
import { ProductosService, Articulo } from '../../servicios/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos: Articulo[] = [];
  // Declarar el servicio para la carga de las propiedades y vallamos a usar en el proceso.
  constructor( private _productosService: ProductosService,
               private router: Router
                ) {
  }

  // Carga del servicio en el componente productos
  ngOnInit() {
    this.productos = this._productosService.getProductos();
  }
  // usamos el servicio Router, para incluirlo en el objeto que esta en el app.routes.ts
  verArticulo( idx: number ) {
    this.router.navigate( ['/articulo', idx] );
  }

}
