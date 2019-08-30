<?php
require('databaseConnexion.php');
    // $bla = json_decode($_POST['json']);

    // $linkSong = 'music/' . str_replace(' ','', $_POST['json'][4]) ;
    // $fichierSong = fopen($linkSong, 'c+');
    // fwrite($fichierSong,  $_POST['json'][5]);
    // fclose($fichierSong);

    // $a = ('../music/samarche.txt') ;
    // $b = fopen($a, 'w+');
    // fwrite($b,  'blablabla');
    // fclose($b);

    // $linkImg = 'img/' . str_replace(' ','', $_POST['json'][2]);
    // $fichierImg = fopen($linkImg, 'c+');
    // fwrite($fichierImg,  $_POST['json'][3]);
    // fclose($fichierImg);

    
    echo($_POST['json'][0]);
// $linkSong = 'music/' . $_POST['json'][4] ;
// $fichierSong = fopen($linkSong, 'w+');
// fwrite($fichierSong, $_POST['json'][5]);
// fclose($fichierSong);

// $linkImg = 'img/' . $_POST['json'][2];
// $fichierImg = fopen($linkImg, 'w+');
// fwrite($fichierImg, $_POST['json'][3]);
// fclose($fichierImg);

$req = $dtb->prepare('INSERT INTO song(title, author, tag, imgLink) VALUES(:title, :author, :tag, :imgLink)');
$req->execute(array(
	'title' => $_POST['json'][0],
	'author' => $_POST['json'][2],
	'tag' => $_POST['json'][1],
	'imgLink' => $_POST['json'][3]
	));

