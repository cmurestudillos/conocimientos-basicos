var express = require('express')
var http = require('http')
var app = express()

var productos = [
      {
        "nombre": "Gambas cocidas",
        "bio": "Gambas cocidas y peladas, muy ricas con mahonesa",
        "img": "assets/img/gambas.png",
        "precio": "3.57",
        "alergeno":"molusco"
      },
      {
        "nombre": "Pan de molde",
        "bio": "Pan de molde, como pan de molde no es gran cosa pero te saca de algun apuro",
        "img": "assets/img/pan.jpg",
        "precio": "1.24",
        "alergeno":"gluten"
      },
      {
        "nombre": "Jamón en lonchas",
        "bio": "Ibérico. Esto junto con el pan de molde, te salva de comer 'pan con pan...'" ,
        "img": "assets/img/jamon.jpg",
        "precio": "2.87",
        "alergeno": "free"
      },
      {
        "nombre": "Queso Emmental",
        "bio": "Esto junto con el pan de molde y el jamón, son la santísima trinidad para salir de ese apuro",
        "img": "assets/img/queso.png",
        "precio": "2.45",
        "alergeno":"lacteo"
      },
      {
        "nombre": "Nordes",
        "bio": "Ginebra creada a base de albariño, quien no lo ha probado, no ha besado jamás el cielo en la tierra",
        "img": "assets/img/licor.jpg",
        "precio": "24.87",
        "alergeno": "free"
      },
      {
        "nombre": "Platano de canarias",
        "bio": "En el top 3 de productos más vendidos de un supermercado desde antes de que existieran las hombreras",
        "img": "assets/img/platano.jpg",
        "precio": "3.08",
        "alergeno": "free"
      }
    ]
  

app.get('/productos', (req, res) => {
    res.send(productos)
})

app.post('/productos', (req, res) => {
    users.push('Articulo ' + productos.length)
    res.send("Nuevo articulo añadido");
})

app.delete('/productos', (req, res) => {
    res.send('DELETE articulos')
})


app.get('/', (req, res) => {
    res.status(200).send("Bienvenido al API REST de Angular")
})

http.createServer(app).listen(8001, () => {
    console.log('Servidor iniciado en http://localhost:8001');
});

/*
app.get('/users/oscar/avatar', (req, res) => {
  res.send('Hello GET:/users/oscar/avatar')
})

app.put('/users/oscar/avatar', (req, res) => {
  res.send('Hello PUT:/users/oscar/avatar')
})

app.delete('/users/oscar', (req, res) => {
  res.send('Hello DELETE:/users/oscar')
})

app.post('/users', (req, res) => {
  res.send('Hello POST:/users')
})

*/