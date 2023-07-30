<!DOCTYPE html>
<html lang="es">
<head>
    <title>Funcion con retorno de valores</title>
</head>
<body>

<?php
function getSum($num1, $num2){
    $total = $num1 + $num2;
    return $total;
}
 
echo getSum(5, 10); 
?>

</body>
</html>  