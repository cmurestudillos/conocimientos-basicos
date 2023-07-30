//---------------------------------------------------------------------------//
//                                                                           //
//                      Libreria de Funciones Javascript                     //   
//                                                                           //   
//---------------------------------------------------------------------------//
//Uso del prompt
function usoCookies(){
    //Hace un confirm que devuelve un boolean
   var confirmar = confirm("¿Quieres aceptar las cookies?");
   if(confirmar){
        document.body.style.background = "url('cookie.jpg')";
        var direccion = prompt("Gracias! ¿A donde te envio las migas?");
        alert(direccion);
   }else{
        document.body.style.background = "url('cookieSad.jpg')";
        var direccion = prompt("¡Asaltare tu cocina! ¡Dame tu direccion");
        alert(direccion);
   }
}