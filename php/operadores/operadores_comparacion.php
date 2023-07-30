<!DOCTYPE html>
<html lang="es">
<head>
    <title>Operadores de comparacion</title>
</head>
<body>

<?php
    $x = 25;
    $y = 35;
    $z = "25";

    var_dump($x == $z);
    echo "<br>";

    var_dump($x === $z);
    echo "<br>";

    var_dump($x != $y);
    echo "<br>";

    var_dump($x !== $z);
    echo "<br>";

    var_dump($x < $y);
    echo "<br>";

    var_dump($x > $y);
    echo "<br>";

    var_dump($x <= $y);
    echo "<br>";

    var_dump($x >= $y);
?>

</body>
</html>  