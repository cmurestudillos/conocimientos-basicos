<!DOCTYPE html>
<html lang="es">
<head>
    <title>Arrays Multidimensionales</title>
</head>
<body>

<?php
    $contacts = array(
        array(
            "nombre" => "Peter Parker",
            "email" => "peterparker@mail.com",
        ),
        array(
            "nombre" => "Clark Kent",
            "email" => "clarkkent@mail.com",
        ),
        array(
            "nombre" => "Harry Potter",
            "email" => "harrypotter@mail.com",
        )
    );
    echo "El correo de Peter Parker es: " . $contacts[0]["email"];
?>

</body>
</html>  