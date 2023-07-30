var pubsub = (function() {
  var suscriptores = {};
  function EventObject() {};
  function subscribe(event, callback) {
    if (!suscriptores[event]) {
      var suscriptorArray = [callback];
      suscriptores[event] = suscriptorArray;
    } else {
      suscriptores[event].push(callback);
      }
    }
    
    function publish(event, data) {
      var eventObject = new EventObject();
      eventObject.type = event;
      if (data) {
        eventObject.data = data;
      }
      if (suscriptores[event]) {
        suscriptores[event].forEach(function (callback) {
        callback(eventObject);
        });
      }
    }
    return {
    pub: publish,
    sub: subscribe
  };
}());

pubsub.pub('MiEvento', {
  misDatos: 'Estos son mis datos'
});

pubsub.sub('MiEvento', function(e) {
  console.log('miEvento ha sido lanzado, y contiene: ', e.data.misDatos);
});
