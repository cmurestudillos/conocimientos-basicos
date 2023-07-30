// Definimos las variables globales que vamos a utilizar
// durante nuestra partida.

var words = [['ordenador'], ['videojuego'], ['playstation'], ['mesa'], ['shogo'], ['timesplitters'], ['colina'], ['didacta'], ['consola'], ['original'], ['region'], ['shader'], ['teclado'], ['raton']];
var word = '';
var hidden_letter = [];
var letter_space = document.getElementById("word");
var count = 6;
var count_fails = 1;

// Se coge una palabra de forma aleatoria del Array words para el juego
function generateWord() {
    var total_words = words.length - 1;
    rand = (Math.random() * total_words).toFixed(0);
    word = words[rand][0].toUpperCase();

}

// Se pasa como parametro la longitud de la palabra escogida en la anterior funcion
// y se pintan los guiones necesarios que se mostraran en pantalla
function generateDash(num) {
    letter_space = document.getElementById("word");
    for (var i = 0; i < num; i++) {
      hidden_letter[i] = "_";
    }
    letter_space.innerHTML = hidden_letter.join("");

}

// En vez de crear todos los botones uno a uno, los creamos con un bucle for y los
// anclamos a una etiqueta HTML
// Sacamos los valores desde ASCII para las letras
function generateButtons (a,z) {
    var i = a.charCodeAt(0), j = z.charCodeAt(0);
    var letter = '';

    for( ; i<=j; i++) {
        letter = String.fromCharCode(i).toUpperCase();
        document.getElementById("buttons").innerHTML += "<button value='" + letter + "' onclick='try_letter(\"" + letter + "\")' class='letter' id='"+letter+"'>" + letter + "</button>";
    }

}

// Comprueba si el valor del boton concuerda con alguna letra
// y la coloca borrando los guiones. Desde esta funcion se llama a checkWord
function try_letter(letter) {
    document.getElementById(letter).disabled = true;
    document.getElementById(letter).classList.remove("letter");
    
    if(word.indexOf(letter) != -1) {
        for(var i=0; i<word.length; i++) {
            if(word[i]==letter) hidden_letter[i] = letter;
        }
        letter_space.innerHTML = hidden_letter.join("");
        document.getElementById(letter).classList.add("letter-correct");
    }
    else {
        count--;
        count_fails++;
        document.getElementById(letter).classList.add("letter-incorrect");
        document.getElementById('try').innerHTML = count;
        document.getElementById("image").src = 'assets/img/hangman_'+count_fails+'.jpg';
    }

    checkWord();

}

// Se chequea la palabra cada vez que se clicka en una letra y se comprueba si se ha finalizado la palabra.
// Segun como sea su finalizacion, se mostrara si se ha ganado o no.
function checkWord() {
    if (count == 0) {
        document.getElementById('buttons').innerHTML = "<button onclick='location.reload()' >Volver a empezar</button>";
    }
    else if (hidden_letter.indexOf("_") == -1 ) {
        document.getElementById("image").src = 'assets/img/hangman_win.jpg';
        document.getElementById('buttons').innerHTML = "<button onclick='location.reload()' >Volver a empezar</button>";
    }

}

// Esta funcion llama a estas tres funciones a la vez.
function startGame() {
    generateWord();
    generateDash(word.length);
    generateButtons ('a', 'z');

}

// Al cargar la ventana, cargamos la funcion startGame
window.onload = startGame();