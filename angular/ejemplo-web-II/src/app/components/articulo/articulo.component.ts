import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ProductosService } from "../../servicios/productos.service";

@Component({
  selector: "app-articulo",
  templateUrl: "./articulo.component.html"
})
export class ArticuloComponent {
  articulo: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _productoService: ProductosService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.articulo = this._productoService.getArticulo(params["id"]);
    });
  }
}
