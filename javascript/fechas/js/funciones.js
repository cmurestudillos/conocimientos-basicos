//---------------------------------------------------------------------------//
//                                                                           //
//                      Libreria de Funciones Javascript                     //   
//                                                                           //   
//---------------------------------------------------------------------------//
//Uso y trabajo de fechas
function mostrarFecha(){
    //Trabajar con fecha
    var mostrar = "";
    var salto = "<br>"
    var miFecha = new Date();
    //alert(miFecha);

    mostrar = "La fecha y horas actuales son:" + salto;
    mostrar += "Dia: " + miFecha.getDate() + salto;
    mostrar += "Mes: " + (miFecha.getMonth() + 1) + salto;
    mostrar += "Año: " + miFecha.getFullYear() + salto;
    mostrar += "Horas: " + miFecha.getHours() + salto;
    mostrar += "Minutos: " + miFecha.getMinutes() + salto;
    mostrar += "Segundos: " + miFecha.getSeconds() + salto;
    document.getElementById("div1").innerHTML = mostrar;
}