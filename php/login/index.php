<?php
// index.php
session_start();

$identity = null;
if (isset($_SESSION['identity'])) {
    $identity = $_SESSION['identity'];
}
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Pagina Inicial</title>
    </head>
    <body>
        <h1>Inicio</h1>
        <?php if ($identity==null): ?>
        <a href="login.php">Login</a>
        <?php else: ?>
        <strong>Bienvenido, <?= $identity ?></strong> <a href="logout.php">Desconectar</a>
        <?php endif; ?>
    </body>
</html>