var respuestaHTML = document.querySelector('#respuesta');
var tpl = '';
fetch("http://jsonplaceholder.typicode.com/photos" )
    .then((response) => {
    return response.json()
  })
    .then((albums) => {
    albums.forEach(function (elem) {
    tpl += '<a href="' + elem.url + '">'
    + '<img src="' + elem.thumbnailUrl + '"/>',
    + '</a>',
    + '<br/>',
    + '<span>' + elem.title + '</span>';
  });
  respuestaHTML.innerHTML = tpl;
});

// utilizandoel metodo createDocumentFragment
var respuestaHTML = document.querySelector('#respuesta'),
var tpl = document.createDocumentFragment();
var elemento;
fetch("http://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
    .then((albums) => {
    albums.forEach(function (elem) {
    elemento = document.createTextNode(
    `<a href="${elem.url}">
    <img src="${elem.thumbnailUrl}" />
    </a>
    <br/>
    <span>${elem.title}</span>`);
    tpl.appendChild(elemento);
  });
  respuestaHTML.appendChild(tpl);
});
