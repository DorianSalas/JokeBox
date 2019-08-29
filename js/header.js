// bla

$('#divCo').on('click', async () => {
    let didComplete = false;
    const results = await Swal.fire({
        titleText: 'Connexion',
        html: '<div id="connexionInputGroup"><label for="logUserInput">Nom d\'utilisateur :</label><input type="text" id="logUserInput"></input><label for="logPassInput">Mot de passe :</label><input type="password" id="logPassInput"></input></div>',
        footer: '<p>Vous n\'avez pas de compte ? <a href="">Contactez un administrateur</a> !</p>',
        focusConfirm: false,
        preConfirm: () => {
            didComplete = true;
            return [
                document.getElementById('logUserInput').value,
                document.getElementById('logPassInput').value
            ]
        }
    });
    if (didComplete) {
        fetch('php/connexionApi.php?username=' + results.value[0] + '&pass=' + results.value[1]).then(async promise => {
            return await promise.json();
        }).then(answer => {
            if (answer['status'] === "OK") {
                sessionStorage.setItem('connectedAs', answer['text']);
                connexionCallback("ON");
            }
            else {
                Swal.fire({
                    titleText: answer['text']
                });
            }
        });
    }
    else {
        // When user clics outside of modal or on the cross -- Closes modal
    }
});

$('#divDeco').on('click', () => {
    sessionStorage.removeItem('connectedAs');
    connexionCallback("OFF");
});