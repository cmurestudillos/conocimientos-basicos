//---------------------------------------------------------------------------//
//                                                                           //
//                      Libreria de Funciones Javascript                     //   
//                                                                           //   
//---------------------------------------------------------------------------//
//Funcionamiento del window.forward
function siguiente(){
    window.history.forward();
}
//Funcionamiento del window.history
function volverAtras(){
    window.history(-3); // Retrocedemos 3 paginas
}
//Funcionamiento del window.go
function irA(){
    history.go(2); //Avanzamos 2 paginas
}

//Funcionamiento del history.length
function historial(){
    alert("has visitado " + history.length + " estas paginas.");
}