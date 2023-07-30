var libro = {
    titulo: "Desarrollo Web",
    autor: {
    nombre: "Carlos Mur",
    nacionalidad: "Español",
    edad: 34,
    contacto: {
      email: "cmurestudillos@gmail.com"
    }
},
    personal: {
      web: "https://cmurestudillos.es"
    }
};

// Podemos acceder con notación punto, array, o mixto.
libro.autor.nombre; // "Carlos Mur"
libro['autor']['edad']; // 34
libro['personal'].web; // "https://cmurestudillos.es"
libro.autor['contacto'].email; // "cmurestudillos@gmail.com"
