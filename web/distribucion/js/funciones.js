//---------------------------------------------------------------------------//
//                                                                           //
//            Libreria de Funciones Javascript - Curso de Angular            //   
//                                                                           //   
//---------------------------------------------------------------------------//
//Calculo de Farenheit a Celsius - Ejercicio 06
function farenTocel(param1, param2, param3, param4){
    alert( ((param4 * param3)/param2) * param1);
}

//Calculo del radio de la circunferencia - Ejercicio 07
function areaCirculo(param){
    //Obtenemos el valor que tenemos en la cache del valor
    this.r = param;
    return 3.1316 * (r * r);
}

//obtenemos el Id del boton y mostramos su informacion - Ejercicio 08
function informeBoton(botonId, botonName, botonValue){
    //Mostramos los datos del boton presiona
    var mensajeBoton = "La Id del boton presionado es: " + botonId + "\n";
    mensajeBoton += "El nombre del boton presionado es: " + botonName + "\n";
    mensajeBoton += "El valor del boton presionado es: " + botonValue;
    alert(mensajeBoton);
}

//Recoger el Id de un elemento - Ejercicio 09
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

//----------------------------- Ejercicio 10 -----------------------------//
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
//----------------------------- Ejercicio 10 -----------------------------//

//Uso del prompt - Ejercicio 11
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

//Uso y trabajo de fechas - Ejercicio 12
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

//Programacion orientada a Objetos - Ejercicio 13-a
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

//Programacion orientada a Objetos - Ejercicio 13-b
function crearObjetoB(){
    nuevoObjeto = new Object();
    //Añadimos una propiedad
    nuevoObjeto.info = 4;
      
    //Asignamos la funcion al objeto directamente  
    coche.mostrarInfo = function(){
        alert(this.info); //Referenciado al objeto padre
        
    }
}

//JSON - Funcion parse Ejercicio 17 - c
function jsonParse() {
    var enString = prompt("Escribe un objeto en JSON");
    //creamos el objeto salida inicializado
    var salida = "";
    //usamos el metodo parse donde se va a guardar lo que se escribe
    var miObjeto = JSON.parse(enString);
    //aplicamos el loop for alo que haga el usuario
    for (i in miObjeto){
        salida += "Propiedad: " + i + " = " + miObjeto[i] + '\n';
    }    
    alert(salida);
}