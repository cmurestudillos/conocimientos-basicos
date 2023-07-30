<?php
	switch ($_SERVER["SCRIPT_NAME"]) {
		case "/php-template/about.php":
			$CURRENT_PAGE = "Sobre"; 
			$PAGE_TITLE = "Sobre . . .";
			break;
		case "/php-template/contact.php":
			$CURRENT_PAGE = "Contacto"; 
			$PAGE_TITLE = "Contacto";
			break;
		default:
			$CURRENT_PAGE = "Index";
			$PAGE_TITLE = "Bienvenidos a mi pagina";
	}
?>