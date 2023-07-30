export class ArticuloRequest {
    constructor(
      public id: number,
      public nombre: string,
      public bio: string,
      public img: string,
      public precio: string,
      public alergeno: string,
      public itx?: string
    ) {}
  }
  