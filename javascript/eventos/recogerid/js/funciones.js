//---------------------------------------------------------------------------//
//                                                                           //
//                      Libreria de Funciones Javascript                     //   
//                                                                           //   
//---------------------------------------------------------------------------//
//Recoger el Id de un elemento
function idListener(){
    //Muestra el DOM del objeto HTML
    //var miDiv = document.getElementById("div1");

    //Muestra el contenido DOM del HTML integro, tag html's incluidos
    //var miDiv = document.getElementById("div1").innerHTML;

    //Sobreescribe el contenido DOM del HTML que la anterior tag HTML
    var miDiv = document.getElementById("div1").innerHTML = "<p>Este contenido ha sido modificado.</p>";

    //Mostramos el contenido de la capa DIV
    alert(miDiv);
}