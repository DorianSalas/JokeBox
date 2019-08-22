<?php
	session_start();
?>

<!DOCTYPE html>

<html lang="fr">

	<head>
		
		<meta charset="utf-8">
        <title>JokeBox</title>
        <link rel="stylesheet" type="text/css" href="css/reset.css">

		<link rel="stylesheet" type="text/css" href="css/main.css">
		
		<link href="css/header.css" rel="stylesheet" type="text/css" />
		<link href="css/jokeBox.css" rel="stylesheet" type="text/css" />

		<link href="css/carousel/carousel.css" rel="stylesheet" type="text/css" />

		<link rel="stylesheet" href="/css/carousel/slick.css">
		<link rel="stylesheet" href="/css/carousel/slick-theme.css">
		<link rel="stylesheet" href="/css/listsong.css">

		
	</head>

	<body>

		<div class="grid-container">

			<div class="header">
				<?php include "php/header.php" ?>
			</div>

			<div class="main">

				<div class="jokebox">
					<?php include "php/jokeBox.php" ?>
				</div>

				<div class="genre">
					<?php include "php/carousel.php" ?>
				</div>

				<div class="listsong">
					<?php include "php/listsong.php" ?>
				</div>

			</div>

		</div>

        <script src="js/jquery.js"></script>
		<script src="js/slick.js"></script>

		<script src="js/header.js"></script>
		<script src="js/jokeBox.js"></script>
		<script src="js/carousel.js"></script>

		<script src="js/main.js"></script>

	</body>

</html>