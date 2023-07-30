// Asumamos que loadCSS devuelve una promesa
var promise = loadCSS('styles.css');

promise.then(function() {
  console.log("Estilos cargados");
});

promise.catch(function(err) {
  console.log("Ocurrió un error: " + err);
});

// promesa de manera mas legible y elegante
loadCSS('styles.css')
  .then(function() {
    console.log("Estilos cargados");
  })
  .catch(function(err) {
    console.log("Ocurrió un error: " + err);
  });
