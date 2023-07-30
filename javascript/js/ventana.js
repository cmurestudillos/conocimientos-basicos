//--------------------------------------------------------------------------------//
//-------------------------- Funciones para ventanas -----------------------------//
//--------------------------------------------------------------------------------//
function popup(){
    window.open('','popUpWindow','height=500, width=400, left=100, top=100, resizable=yes, scrollbars=yes, toolbar=yes, menubar=no, location=no, directories=no, status=yes');
}

function redireccion_I(){
    window.setTimeout(function(){location.href = 'https://www.google.es';}, 1500);    
}

function redireccion_II(){
    document.addEventListener("DOMContentLoaded", function(event) {

    var e = document.getElementById("go");
    
    e.addEventListener("click", function() {
      var redirectURL = document.getElementById("url").value;
      var redirectDelay = document.getElementById("delay").value;
      window.setTimeout(function(){
          location.href = redirectURL;
      }, redirectDelay);    
    }, false);
  });
}

function refresh(){
    document.location.reload(true);   
}

function refreshAutomatico(){
    document.addEventListener("DOMContentLoaded", function(event) {

    window.setTimeout(function(){
        document.location.reload(true);
    }, 3500);    

    document.getElementById("timestamp").innerText = new Date().getTime();  
  
    });    
}

function refresh_II(){
    document.addEventListener("DOMContentLoaded", function(event) {

    var e = document.getElementById("go");
    
    e.addEventListener("click", function() {
          document.location.reload(true); 
    }, false);
    document.getElementById("timestamp").innerText = new Date().getTime();  
  });
}
