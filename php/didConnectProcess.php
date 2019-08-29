<?php
require 'databaseConnexion.php';

$_SESSION['connectedAs'] = $_GET['username'];

header('Location: ../index.php');