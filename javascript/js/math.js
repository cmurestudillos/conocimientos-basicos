//--------------------------------------------------------------------------------//
//--------------------------- Funciones para math --------------------------------//
//--------------------------------------------------------------------------------//
function mathCeil(){
    document.getElementById("msg").innerHTML = Math.ceil(53.478);
}

function mathFloor(){
    document.getElementById("msg").innerHTML = Math.floor(53.678);
}

function mathMin(){
    document.getElementById("msg").innerHTML = Math.min( -8, 10, 53, 67 );
}

function mathPi(){
    document.getElementById("msg").innerHTML = Math.PI;
}

function mathPow(){
    document.getElementById("msg").innerHTML = Math.pow(2, 4);
}

function mathRound(){
    document.getElementById("msg").innerHTML = Math.round(53.478);
}

function mathSqrt(){
    document.getElementById("msg").innerHTML = Math.sqrt(16);
}

function mathMax(){
    document.getElementById("msg").innerHTML = Math.max( -8, 10, 53, 67 );
}