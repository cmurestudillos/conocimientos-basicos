<!DOCTYPE html>
<html lang="es">
<head>
    <title>Condicional Switch-Case</title>
</head>
<body>

<?php
    $today = date("D");
    switch($today){
        case "Mon":
            echo "Hoy es Lunes";
            break;
        case "Tue":
            echo "Hoy es Martes";
            break;
        case "Wed":
            echo "Hoy es Miercoles";
            break;
        case "Thu":
            echo "Hoy es Jueves";
            break;
        case "Fri":
            echo "Hoy es Viernes";
            break;
        case "Sat":
            echo "Hoy es Sabado";
            break;
        case "Sun":
            echo "Hoy es Domingo";
            break;
        default:
            echo "Informacion por defecto";
            break;
    }
?>

</body>
</html> 