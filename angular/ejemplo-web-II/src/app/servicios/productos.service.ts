
import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {
  private productos:Articulo[] = [
    {
      nombre: "Gambas cocidas",
      bio: "Gambas cocidas y peladas, muy ricas con mahonesa",
      img: "assets/img/gambas.png",
      precio: "3.57",
      alergeno:"molusco"
    },
    {
      nombre: "Pan de molde",
      bio: "Pan de molde, como pan de molde no es gran cosa pero te saca de algun apuro",
      img: "assets/img/pan.jpg",
      precio: "1.24",
      alergeno:"gluten"
    },
    {
      nombre: "Jamón en lonchas",
      bio: "Ibérico. Esto junto con el pan de molde, te salva de comer 'pan con pan...'" ,
      img: "assets/img/jamon.jpg",
      precio: "2.87",
      alergeno: "free"
    },
    {
      nombre: "Queso Emmental",
      bio: "Esto junto con el pan de molde y el jamón, son la santísima trinidad para salir de ese apuro",
      img: "assets/img/queso.png",
      precio: "2.45",
      alergeno:"lacteo"
    },
    {
      nombre: "Nordes",
      bio: "Ginebra creada a base de albariño, quien no lo ha probado, no ha besado jamás el cielo en la tierra",
      img: "assets/img/licor.jpg",
      precio: "24.87",
      alergeno: "free"
    },
    {
      nombre: "Platano de canarias",
      bio: "En el top 3 de productos más vendidos de un supermercado desde antes de que existieran las hombreras",
      img: "assets/img/platano.jpg",
      precio: "3.08",
      alergeno: "free"
    }
  ];
  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getProductos():Articulo[]{
    return this.productos;
  }

  getArticulo( idx: number ){
    return this.productos[idx];
  }

  buscarProductos( termino:string ):Articulo[]{

    let productosArr:Articulo[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.productos.length; i ++ ){
      let articulo = this.productos[i];
      let nombre = articulo.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        articulo.idx = i;
        productosArr.push( articulo )
      }
    }

    return productosArr;

  }


}


export interface Articulo{
  nombre: string;
  bio: string;
  img: string;
  precio: string;
  alergeno: string;
  idx?: number;
};
