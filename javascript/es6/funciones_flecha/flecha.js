
// ES5
// Imaginemos una variable data que incluye un array de objectos
var data = [{1}, {2}, {3}];
data.forEach(function(elem){
	// Tratamos el elemento
    console.log(elem)
});
            
//ES6
var data = [{1}, {2}, {3}, 4];
data.forEach(elem => {
	console.log(elem);
});
