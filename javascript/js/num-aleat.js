//--------------------------------------------------------------------------------//
//--------------------- Funciones para numeros aleatorios ------------------------//
//--------------------------------------------------------------------------------//
function aleatorioMax(){
    function getRandomIntIncludeMax(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      document.getElementById("msg").innerHTML = getRandomIntIncludeMax(1, 100);
}

function aleatorioMaxExcl(){
    function getRandomIntExcludeMax(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
      
      document.getElementById("msg").innerHTML = getRandomIntExcludeMax(1, 100);    
}

function mathRandom(){
    document.getElementById("msg").innerHTML = Math.random( 1, 100 );
}

function mathRandomRedondeo(){
    document.getElementById("msg").innerHTML = Math.floor(Math.random( 1, 100 ) * 100);
}