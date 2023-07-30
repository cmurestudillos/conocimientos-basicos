//No, error porque es un string
jsonSerializado.data.city;
/*
Uncaught TypeError: Cannot read property 'city' of undefined
at <anonymous>:2:21
at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34) */

// si, nos vevuelve el objeto a partir del string
var jsonReconstruido = JSON.parse(jsonSerializado); 
/* Object {id: "1", username: "carlosmur", ... */

jsonReconstruido.data.city; // "Huesca"
