// URL http://jsonplaceholder.typicode.com/photos

// Creamos el objeto XMLHttpRequest
var xhr = new XMLHttpRequest();
// Definimos la función que manejará la respuesta
function reqHandler () {
    if (this.readyState === 4 && this.status === 200) {
    /* Comprobamos que el estado es 4 (operación completada)
    * los estados que podemos comprobar son:
    * 0 = UNSET (No se ha llamado al método open())
    * 1 = OPENED (Se ha llamado al método open())
    * 2 = HEADERS_RECEIVED (Se ha llamado al método send())
    * 3 = LOADING (Se está recibiendo la respuesta)
    * 4 = DONE (se ha completado la operación)
    * y el código 200 es el correspondiente al OK de HTTP de
    * que todo ha salido correcto.
    */
    console.log(this.responseText);
    }
}
// Asociamos la funcion manejadora
xhr.onLoad = reqHandler;
// Abrimos la conexión hacia la URL, indicando el método HTTP, en este
// caso será GET
xhr.open('GET', 'http://jsonplaceholder.typicode.com/photos', true);
// Enviamos la petición
xhr.send();

/* Esto es lo que mostrará en la consola:
[
{
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "http://placehold.it/600/92c952",
  "thumbnailUrl": "http://placehold.it/150/30ac17"
},
{
  "albumId": 1,
  "id": 2,
  "title": "reprehenderit est deserunt velit ipsam",
  "url": "http://placehold.it/600/771796",
  "thumbnailUrl": "http://placehold.it/150/dff9f6"
},
