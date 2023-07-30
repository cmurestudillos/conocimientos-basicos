//Objeto Libro
let libro = {
    titulo: 'Desarrollo web',
    autor: 'Carlos Mur',
    paginas: 100,
    formatos: ["PDF", "ePub", "Mobi"],
    precio: 5.00,
    publicado: false
};

//Acceso a propiedades del objeto
libro.titulo;     // Desarrollo web 
libro['paginas']; // 100

// Modificacion de las propiedades del objeto
libro.precio = 1.99;
libro['publicado'] = true;
