<!DOCTYPE html>
<html lang="es">
<head>
    <title>Funcion con parametros</title>
</head>
<body>

<?php
    function getSum($num1, $num2){
    $sum = $num1 + $num2;
    echo "La suma de los numeros $num1 y $num2 es : $sum";
    }
    
    getSum(10, 20);
?>

</body>
</html>   