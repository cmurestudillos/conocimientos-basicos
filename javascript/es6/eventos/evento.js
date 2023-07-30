// Asociamos a un elemento de la web el evento
var target = document.querySelector('#respuesta');
target.addEventListener('click', onClickHandler, false);
// Función que manejará el evento
function onClickHandler(e) {
  e.preventDefault();
  console.log(e);
}
