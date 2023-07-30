<!DOCTYPE html>
<html lang="es">
<head>
    <title>Funcion con parametros opcionales</title>
</head>
<body>

<?php
    function customFont($font, $size=1.5){
        echo "<p style=\"font-family: $font; font-size: {$size}em;\">Hola Mundo</p>";
    }
    
    customFont("Arial", 2);
    customFont("Times", 3);
    customFont("Courier");
?>

</body>
</html> 