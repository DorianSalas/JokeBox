<?php

require 'databaseConnexion.php';

$verify = $dtb->prepare('SELECT * FROM user WHERE pseudo=:username');

$verify->execute(array(
    'username' => $_GET['username']
));

$userData = $verify->fetch();

if (!$userData) {
    echo json_encode(array(
        'status' => 'noUser',
        'text' => 'Aucun utilisateur trouvé.'
    ));
} else {
    if (password_verify($_GET['pass'], $userData['mdp'])) { 
        echo json_encode(array(
            'status' => 'OK',
            'text' => $_GET['username']
        ));
    }
    else {
        echo json_encode(array(
            'status' => 'wrongPass',
            'text' => 'Mot de passe incorrecte.'
        ));
    }
}
