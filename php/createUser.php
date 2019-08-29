<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>create Jokebox User</title>
    <link rel="stylesheet" type="text/css" href="../css/reset.css">
    <link rel="stylesheet" type="text/css" href="../css/main.css">
    <link href="../css/header.css" rel="stylesheet" type="text/css" />
</head>

<body>

    <a href="../index.php">Retourner à la page principale...</a>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script> <!-- SweetAlert2 -->

    <script>
        async function start() {
            let didComplete = false;
            const results = await Swal.fire({
                titleText: 'Create User',
                html: '<div id="connexionInputGroup"><label for="logUserInput">Nom d\'utilisateur :</label><input type="text" id="logUserInput"></input><label for="logPassInput">Mot de passe :</label><input type="password" id="logPassInput"></input></div>',
                focusConfirm: false,
                preConfirm: () => {
                    didComplete = true;
                    return [
                        document.getElementById('logUserInput').value,
                        document.getElementById('logPassInput').value
                    ];
                }
            });
            if (didComplete) {
                fetch('createUserProcess.php?username=' + results.value[0] + '&pass=' + results.value[1]).then(async promise => {
                    return await promise.json();
                }).then(answer => {
                    Swal.fire({
                        titleText: 'DONE !',
                        text: 'Username : ' + answer['username'] + ' & Password : ' + answer['pass']
                    });
                });
            }
        };

        start();
    </script>
</body>

</html>