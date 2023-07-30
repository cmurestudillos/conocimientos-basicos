<!DOCTYPE html>
<html lang="es">
<head>
    <title>Objetos - PHP</title>
</head>
<body>

<?php
// Definicion de clases
class greeting{
    // Propiedades
    public $str = "Hola Mundo";
    
    // methods
    function show_greeting(){
        return $this->str;
    }
}
 
// Crear un objeto desde una clase
$message = new greeting;
var_dump($message);
?>

</body>
</html> 