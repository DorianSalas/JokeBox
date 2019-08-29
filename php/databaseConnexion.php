<?php
session_start();
try
	{
		$dtb = new PDO('mysql:host=localhost;dbname=jokebox;charset=utf8', 'admin', 'nimda');
	}
	catch (Exception $e)
	{
		die('Erreur : ' . $e->getMessage());
	}
