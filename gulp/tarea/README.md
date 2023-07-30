//  instalar gulp tanto a nivel global
* npm install --global gulp-cli
// Crear directorio del proyecto
* mkdir "app"
// situarnos en el directorio
* cd "app"
// Crear un proyecto desde cero, primero se necesita ejecutar npm init para generar el archivo package.json
* npm init
//  instala gulp a nivel de proyecto
* npm install gulp --save-dev
// Crear un fichero llamado gulpfile.js, que debe de estar en la raíz del proyecto (y estar referenciado en la propiedad main del package.json de nuestro proyecto). 

// Uso de dos plugins de gulp, que son gulp-concat y gulp-uglify, que se importan en el gulpfile mediante ´require´.
* npm install --save-dev gulp-concat
* npm install --save-dev gulp-uglify