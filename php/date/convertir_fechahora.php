<!DOCTYPE html>
<html lang="es">
<head>
    <title>Convertir fecha/hora</title>
</head>
<body>

<?php
    $timestamp = time();
    echo($timestamp);
    echo "<br>";

    echo(date("F d, Y h:i:s", $timestamp));
?>

</body>
</html>    