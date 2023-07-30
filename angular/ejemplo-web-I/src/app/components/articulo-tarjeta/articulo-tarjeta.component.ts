import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo-tarjeta',
  templateUrl: './articulo-tarjeta.component.html',
  styleUrls: ['./articulo-tarjeta.component.css']
})
export class ArticuloTarjetaComponent implements OnInit {
  @Input() articulo: any = {};
  @Input() index: number;

  @Output() articuloSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.articuloSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verArticulo() {
    this.router.navigate( ['/articulo', this.index] );
  }

}
