<?php

require 'databaseConnexion.php';

$getSongs = $dtb->prepare('SELECT * FROM song');

$getSongs->execute();

$returnedArray = array();

while ($data = $getSongs->fetch()) {
    array_push($returnedArray, $data);
}

echo json_encode($returnedArray);