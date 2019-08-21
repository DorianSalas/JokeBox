<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<meta charset="utf-8">
</head>
<body>


	<div class="grid-container">
		<div class="header"><?php include "php/header.php"?></div>
  		<div class="main">
    		<div class="jokebox"><?php include "php/jukeBox.php"?></div>
    		<div class="genre"<?php include "php/carousel.php"?>></div>
    		<div class="listsong"><?php include "php/listsong.php"?></div>
  		</div>
  		
	</div>

	<script src="js/main.js"></script>
</body>
</html>