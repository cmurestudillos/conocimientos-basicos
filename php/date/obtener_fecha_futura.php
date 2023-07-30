<!DOCTYPE html>
<html lang="es">
<head>
    <title>Obtener la fecha futura</title>
</head>
<body>

<?php
    $futureDate = mktime(0,0,0,date("m")+30,date("d"),date("Y"));
    echo date("d/m/Y", $futureDate);
?>

</body>
</html>   