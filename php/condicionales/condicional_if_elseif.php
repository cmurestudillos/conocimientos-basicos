<!DOCTYPE html>
<html lang="es">
<head>
    <title>Condicional If-elseIf</title>
</head>
<body>

<?php
    $d = date("D");
    if($d == "Fri"){
        echo "Ten un buen fin de semana";
    } elseif($d == "Sun"){
        echo "Disfruta del Domingo";
    } else{
        echo "Ten un buen dia";
    }
?>

</body>
</html>  