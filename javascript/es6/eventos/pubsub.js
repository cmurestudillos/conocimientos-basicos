var pubsub = (function() {
  // Este objeto actuará como cola de todos los eventos que se
  // produzcan. Los guardará con el nombre del evento como clave
  // y su valor será un array con todas las funciones callback encoladas.
  var suscriptores = {};
  function subscribe(event, callback) {
  // Si no existe el evento, creamos el objeto y el array de callbacks
  // y lo añadimos
  if (!suscriptores[event]) {
    var suscriptorArray = [callback];
    suscriptores[event] = suscriptorArray;
    // Si existe, añadimos al array de callbacks la función pasada por
    // parámetro
    } else {
    suscriptores[event].push(callback); 
    }
  }

  function publish(event) {
    // Si el evento existe, recorremos su array de callbacks y los
    // ejecutamos en orden.
    if (suscriptores[event]) {
    suscriptores[event].forEach(function (callback) {
    callback();
    }); 
    }
  }
  return {
  // Los métodos públicos que devolvemos serán `pub` y `sub`
  pub: publish,
  sub: subscribe
  };
}());

pubsub.sub('miEvento', function(e) {
  console.log('miEvento ha sido lanzado!');
});

pubsub.pub('miEvento');
