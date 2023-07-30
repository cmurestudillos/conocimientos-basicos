//ES5
(function() {
	console.log(x); // x no está definida aún.
    if(true) {
    	var x = "hola mundo";
    }
    console.log(x); 
    // Imprime "hola mundo", porque "var" hace que sea global
    // a la función;
})();

//ES6
(function() {
	if(true) {
    	let x = "hola mundo";
    }
    console.log(x); 
    //Da error, porque "x" ha sido definida dentro del "if"
})();

//ES6
(function() {
	const PI;
    PI = 3.15; 
    // ERROR, porque ha de asignarse un valor en la 
    // declaración
})();

(function() {
	const PI = 3.15;
    PI = 3.14159;
    // ERROR de nuevo, porque es sólo-lectura
})();
