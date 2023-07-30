var myHeaders = new Header();
myHeaders.append('Content-Type', 'application/json');
  fetch(URI, {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
})
