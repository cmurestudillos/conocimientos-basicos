//--------------------------------------------------------------------------------//
//----------------------- Funciones para dialog Boxes ----------------------------//
//--------------------------------------------------------------------------------//
function alertBox(){
    document.addEventListener("DOMContentLoaded", function(event) {

        var e = document.getElementById("go");
        e.addEventListener("click", function() {
            alert("Hola Mundo!!!");
        }, false);
      });
}

function boxConfirmacion(){
    document.addEventListener("DOMContentLoaded", function(event) {

        var e = document.getElementById("go");
        e.addEventListener("click", function() {
            confirm("¿Estas seguro?");
        }, false);
      });
}

function printBox(){
    document.addEventListener("DOMContentLoaded", function(event) {

        var e = document.getElementById("print");
        e.addEventListener("click", function() {
            window.print();
        }, false);
      });
}

function promptCond(){
    document.addEventListener("DOMContentLoaded", function(event) {

        var e = document.getElementById("go");
        e.addEventListener( "click", function() {
          var name=prompt("¿Cual es tu nombre??","Jojo");
          if ( name!=null && name!="" ) {
            output = "Perfecto " + name + ". Nos veremos.";
            }
          else {
            output = "Hey, He preguntado cual es tu nombre!";
            }
          document.getElementById( "msg" ).innerText = output;
        }, false);
      });
}

function prompt(){
    document.addEventListener("DOMContentLoaded", function(event) {

        var e = document.getElementById("go");
        e.addEventListener( "click", function() {
          var name = prompt("¿Cual es tu Nombre?","JoJo");
          document.getElementById( "msg" ).innerText = name;
        }, false);
      });
}

function saltarMenu(){
    document.addEventListener("DOMContentLoaded", function(event) {

        var e = document.getElementById("jumpmenu");
        e.addEventListener("change", function() {
            selectedURL = this.options[this.options.selectedIndex].value;
            if (this.value != "null") {
              var confirmLeave = confirm("¿Estas seguro?");
              if (confirmLeave==true) { 
                document.location.href = selectedURL; 
              }
              else { 
                return false;
              }
            }     
        });
      });
}