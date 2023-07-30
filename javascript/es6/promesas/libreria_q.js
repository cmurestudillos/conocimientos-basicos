var Q = require('q');

function division (num1, num2) {
  var deferred = Q.defer();
  if (num2 == 0) {
    deferred.reject(new Error("Dividir entre cero es Infinito"));
  } else {
    deferred.resolve(num1 / num2);
  }
  
  return deferred.promise;
}

division(2,1)
  .then(function(result) {
  console.log("El resultado es: " + result);
  })
  .catch(function(err) {
  console.log("Ha ocurrido un error: " + err);
  })
