<!DOCTYPE html>
<html lang="es">
<head>
    <title>Bucle ForEach extendido</title>
</head>
<body>

<?php
    $superhero = array(
        "eombre" => "Peter Parker",
        "email" => "peterparker@mail.com",
        "edad" => 18
    );
    
    foreach($superhero as $key => $value){
        echo $key . " : " . $value . "<br>";
    }
?>

</body>
</html>  