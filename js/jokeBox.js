let listmusicreal
let btn_music
let playerdiv = document.getElementById("audio_player");
let player = document.getElementById("player");

let endfunc = function() {
    if (player.attributes.track.value < listmusicreal.length - 1) {
        playerdiv.innerHTML = "<audio id='player' controls track='" + (player.attributes.track.value++) + "'><source src='music/" + listmusicreal[player.attributes.track.value++] + "' /></audio>"
        player = document.getElementById("player");
        player.onended = endfunc;

        for (let i = 0; i < btn_music.length; i++) {
            btn_music[i].className = "song"
        }

        btn_music[player.attributes.track.value].className = "song play"
        document.querySelector('.jukebox__record-image').src = document.querySelector('.play img').src;
    } else {
        // fin de la liste
    }
}

function getList() {
    btn_music = document.getElementsByClassName("song");
    listmusicreal = []

    for (var i = 0; i < btn_music.length; i++) { //peut être parcourir liste autre sens
        listmusicreal.push(btn_music[i].attributes.value.value)
    }

    playerdiv.innerHTML = "<audio id='player' controls autoplay track='0'><source src='music/" + listmusicreal[0] + "' /></audio>";
    player = document.getElementById("player");
    player.onended = endfunc;

    btn_music[0].className = "song play"
    document.querySelector('.jukebox__record-image').src = document.querySelector('.play img').src;

    addEventBtn()
}

function addEventBtn() {
    btn_music = document.getElementsByClassName("song");

    for (let i = 0; i < btn_music.length; i++) {
        btn_music[i].addEventListener("click", (e) => {

            playerdiv.innerHTML = "<audio id='player' controls autoplay track='" + i + "'><source src='music/" + listmusicreal[i] + "' /></audio>";
            player = document.getElementById("player");
            player.onended = endfunc;


            for (let i = 0; i < btn_music.length; i++) {
                btn_music[i].className = "song"
            }

            btn_music[i].className = "song play"
            document.querySelector('.jukebox__record-image').src = document.querySelector('.play img').src;
        })
    };
}