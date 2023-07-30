<!DOCTYPE html>
<html lang="es">
<head>
    <title>Crear una funcion</title>
</head>
<body>

<?php
    function whatIsToday(){
        echo "Hoy es " . date('l', mktime());
    }
    whatIsToday();
?>

</body>
</html>  