//---------------------------------------------------------------------------//
//                                                                           //
//                      Libreria de Funciones Javascript                     //   
//                                                                           //   
//---------------------------------------------------------------------------//
//obtenemos el Id del boton y mostramos su informacion
function informeBoton(botonId, botonName, botonValue){
    //Mostramos los datos del boton presiona
    var mensajeBoton = "La Id del boton presionado es: " + botonId + "\n";
    mensajeBoton += "El nombre del boton presionado es: " + botonName + "\n";
    mensajeBoton += "El valor del boton presionado es: " + botonValue;
    alert(mensajeBoton);
}