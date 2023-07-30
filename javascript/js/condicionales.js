//--------------------------------------------------------------------------------//
//---------------------------- Funciones para condicionales ----------------------//
//--------------------------------------------------------------------------------//
function CondSwitch(){
    document.addEventListener("DOMContentLoaded", function(event) {

        var e = document.getElementById("myForm");
        
        e.addEventListener( "change", function() {
        
          var myColor = this.color.value;
          switch ( myColor ) {
          case "Azul":
            alert("Como el cielo");
            break;
          case "Rojo":
            alert("como el fuego");
            break;
          case "Verde":
            alert("Como la hierba");
            break;
          }
        }, false);
      });   
}

function operadores(){
    document.addEventListener("DOMContentLoaded", function(event) {

        var e = document.getElementById("myForm");
        
        e.addEventListener( "change", function() {
          var msg = (this.color.value == "Azul") ? "Como el cielo" : "No has seleccionado azul";
          document.getElementById("msg").innerHTML = msg;
        }, false);
      });
}

function CondIf(){
    document.addEventListener("DOMContentLoaded", function(event) {

        var e = document.getElementById("myForm");
        
        e.addEventListener( "change", function() {
          var myColor = this.color.value;
          if (myColor == "Azul") {
            document.getElementById("msg").innerHTML = "Como el cielo";
          }
        }, false);
      });
}

function CondIfElse(){
    document.addEventListener("DOMContentLoaded", function(event) {

        var e = document.getElementById("myForm");
        var msg = "";
        
        e.addEventListener( "change", function() {
          var myColor = this.color.value;
          if (myColor == "Azul") {
            msg = "Como el cielo";
          }	
          else {
            msg = "No ha has cogido el color correcto";
          }
          document.getElementById("msg").innerHTML = msg;
        }, false);
      });
}

function CondIfElseIf(){
    document.addEventListener("DOMContentLoaded", function(event) {

        var e = document.getElementById("myForm");
        var msg = "";
       
        e.addEventListener( "change", function() {
          var myColor = this.color.value;
          if (myColor == "Azul") {
            msg = "Como el cielo";
          }	
          else if (myColor == "Rojo") {
            msg = "Como el fuego";
          }
          else if (myColor == "Verde") {
            msg = "Como la hierba";
          }   
          document.getElementById("msg").innerHTML = msg;
        }, false);
      });
}