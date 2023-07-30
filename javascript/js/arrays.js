//--------------------------------------------------------------------------------//
//------------------------------- Funciones para arrays --------------------------//
//--------------------------------------------------------------------------------//
function agregarItemFin(){
    var cities =  ["Berlin", " Tokyo", " Madrid", " Paris"];
    cities.push( " London", " Moscu" );
    document.getElementById("msg").innerHTML = cities;
}

function agregarItemIni(){
    var cities =  [" Berlin", " Tokyo", " Madrid", " Paris"];
    cities.unshift( " London", " Moscu" );
    document.getElementById("msg").innerHTML = cities;
}

function concatenarTwoArrays(){
    var citiesEU =  ["Berlin", " Madrid", " Barcelona", " Paris"],
    citiesUS =  [" New York", " Miami", " San Fransisco", " Los Angeles"],
    cities = citiesEU.concat(citiesUS);
    document.getElementById("msg").innerHTML = cities;
}

function concatenarThreeArrays(){
    var citiesEU =  ["Berlin", " Madrid", " Barcelona", " Paris"],
    citiesNZ =  [" Dunedin", " Christchurch", " Auckland", " Wellington"],
    citiesUS =  [" New York", " Miami", " San Fransisco", " Los Angeles"],
    cities = citiesEU.concat(citiesNZ, citiesUS);
    document.getElementById("msg").innerHTML = cities;  
}

function crearArray(){
    var cities = ["Sydney", " London", " Madrid", " Tokyo", " New York"];
    document.getElementById("msg").innerHTML = cities;
}

function eliminarPriItem(){
    var cities =  ["Berlin", "Tokyo", "Madrid", "Paris"];
    cities.shift();
    document.getElementById("msg").innerHTML = cities;
}

function eliminarUltItem(){
    var cities =  ["Berlin", "Tokyo", "Madrid", "Paris"];
    cities.pop();
    document.getElementById("msg").innerHTML = cities;
}

function extraerItemArray(){
    var cities =  [" Tokyo", " Madrid", " Berlin", " Paris", " Moscu", " London"];
    citiesEU = cities.slice(2, 5);
    document.getElementById("msg").innerHTML = cities + "<br>" + citiesEU;
}

function orderArrayAsc(){
    var cities =  [" Berlin", " Tokyo", " Madrid", " Paris", " London", " Moscu"];
    cities.sort();
    document.getElementById("msg").innerHTML = cities;  
}

function orderArrayDesc(){
    var cities =  [" Berlin", " Tokyo", " Madrid", " Paris", " London", " Moscu"];
    cities.sort();
    cities.reverse();
    document.getElementById("msg").innerHTML = cities;
}

function revertirArray(){
    var cities =  [" Berlin", "Tokyo", " Madrid", " Paris", " London", " Moscu"];
    cities.reverse();
    document.getElementById("msg").innerHTML = cities;
}

function stringArray(){
    var cities =  ["Berlin", "Tokyo", "Madrid", "Paris"];
    document.getElementById("msg").innerHTML = cities.join(" - ");
}

