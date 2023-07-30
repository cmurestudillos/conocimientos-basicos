function loadCSS(url, callback) {
  var elem = window.document.createElement('link');
  elem.rel = "stylesheet";
  elem.href = url;
  window.document.head.appendChild(elem);
  callback();
}

loadCSS('styles.css', function() {
  console.log("Estilos cargados");
});
