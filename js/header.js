// bla

$('#divCo').on('click', async () => {
    const results = await Swal.fire({
        titleText: 'Connexion',
        html: '<div id="connexionInputGroup"><label for="logUserInput">Nom d\'utilisateur :</label><input type="text" id="logUserInput"></input><label for="logPassInput">Mot de passe :</label><input type="password" id="logPassInput"></input></div>',
        footer: '<p>Vous n\'avez pas de compte ? <a href="">Contactez un administrateur</a> !</p>',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('logUserInput').value,
                document.getElementById('logPassInput').value
            ]
        }
    });
    console.log(results.value); // Here we could 'actually' connect
});