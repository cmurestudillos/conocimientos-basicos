//---------------------------------------------------------------------------//
//                                                                           //
//                      Libreria de Funciones Javascript                     //   
//                                                                           //   
//---------------------------------------------------------------------------//
//Programacion orientada a Objetos
function crearObjetoA(){
    nuevoObjeto = new Object();
    //Añadimos una propiedad
    nuevoObjeto.info = 'Soy un nuevo Objeto - A';
    //Se crea primero un metodo y para poder crearlo necesitamos una funcion
    function miFuncion(){
        alert(this.info); //Referenciado al objeto padre
    }   
    //y luego asignamos la funcion al objeto 
    // no tiene parentesis, porque no le asignamos la LLAMADA, sino la definicion
    nuevoObjeto.mostrarInfo = miFuncion;
}

//Programacion orientada a Objetos
function crearObjetoB(){
    nuevoObjeto = new Object();
    //Añadimos una propiedad
    nuevoObjeto.info = 4;
      
    //Asignamos la funcion al objeto directamente  
    coche.mostrarInfo = function(){
        alert(this.info); //Referenciado al objeto padre
        
    }
}

//Programacion orientada a Objetos - HERENCIA - I
function AnimalDomestico(){
    //Añadimos en la propiedad el argumento que viene
    this.animal = "";
    this.nombre = "";
    this.configurarAnimal = function(nuevoAnimal){
        this.animal = nuevoAnimal;
     }
     this.configurarNombre = function(nuevoNombre){
        this.nombre = nuevoNombre;
     }
     this.mostrarInfo = function(){
          alert(this.nombre + " es un " + this.animal);
     }
}
                    
function AnimalDomesticoII(){
        //Añadimos en la propiedad el argumento que viene
        this.animal = "";
        this.nombre = "";
        this.configurarAnimal = function(nuevoAnimal){
             this.animal = nuevoAnimal;
        }
        this.configurarNombre = function(nuevoNombre){
             this.nombre = nuevoNombre;
        }
}
