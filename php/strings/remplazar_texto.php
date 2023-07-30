<!DOCTYPE html>
<html lang="es">
<head>
    <title>Remplazar texto en un String PHP</title>
</head>
<body>

<?php
    $my_str = 'Si los hechos no se ajustan a la teoría, cambie los hechos.';
    echo str_replace("hechos", "acontecimientos", $my_str);
?>

</body>
</html>  