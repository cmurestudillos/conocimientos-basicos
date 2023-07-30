<!DOCTYPE html>
<html lang="es">
<head>
    <title>Operadores Arrays</title>
</head>
<body>

<?php
    $x = array("a" => "Rojo", "b" => "Verde", "c" => "Azul");
    $y = array("u" => "Amarillo", "v" => "Naranja", "w" => "Rosa");
    $z = $x + $y; 
    var_dump($z);
    echo "<hr>";

    var_dump($x == $y);
    echo "<br>";

    var_dump($x === $y);
    echo "<br>";

    var_dump($x != $y);
    echo "<br>";

    var_dump($x <> $y);
    echo "<br>";

    var_dump($x !== $y);
?>

</body>
</html> 