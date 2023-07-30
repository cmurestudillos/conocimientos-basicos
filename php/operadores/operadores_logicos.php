<!DOCTYPE html>
<html lang="es">
<head>
    <title>Operadores Logicos</title>
</head>
<body>

<?php
    $year = 2014;
    if(($year % 400 == 0) || (($year % 100 != 0) && ($year % 4 == 0))){
        echo "$year es un año bisiesto.";
    } else{
        echo "$year no es un año bisiesto.";
    }
?>

</body>
</html> 