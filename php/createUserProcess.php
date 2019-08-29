<?php

require 'databaseConnexion.php';

$addUser = $dtb->prepare('INSERT INTO user(pseudo, mdp) VALUES(:pseudo, :mdp)');

$addUser->execute(array(
    'pseudo' => $_GET['username'],
    'mdp' => password_hash($_GET['pass'], PASSWORD_DEFAULT),
));

echo json_encode($_GET);