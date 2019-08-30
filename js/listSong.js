async function getSongs(url) {
    let oui = await fetch(url);
    return oui.text();
}
songList = null;
getSongs('php/songFetchApi.php').then(data => {
    data = JSON.parse(data);
    // Some things here went to ListFilter.js !!
    jsonFetchedCallback(data); // This function is in 'main.js'
});

document.querySelector('#divAddSong img').addEventListener('click', () => { addSong(); });

async function addSong() {
    if (sessionStorage.getItem('connectedAs') !== null) {
        let addSongForm = await Swal.fire({
            titleText: 'Add song',
            html: '<div id="addSongInputGroup"><label for="titleSongInput">Title :</label><input type="text" id="titleSongInput"></input><label for="tagSongInput">Tag :</label><input type="text" id="tagSongInput"></input><label for="authorInput">Author :</label><input type="text" id="authorInput"></input><label for="imgSong">Choisir une image :</label><input type="file" id="imgSong"><label for="fileSong">Song :</label><input type="file" id="fileSong"></div>',
            focusConfirm: false,
            preConfirm: async() => {
                dataUrlImg = null;
                fr = new FileReader();
                fr.onload = () => {
                    // console.log(result);
                    dataUrlImg = fr.result;
                    // console.log("fr.result");
                    // console.log(fr.result);
                    dataUrlSong = null;
                    fr2 = new FileReader();
                    fr2.onload = () => {
                        // console.log(result);
                        dataUrlSong = fr2.result;
                        test = [

                            document.getElementById('titleSongInput').value,
                            document.getElementById('tagSongInput').value,
                            document.getElementById('authorInput').value,
                            document.getElementById('imgSong').files[0].name,
                            dataUrlImg,
                            document.getElementById('fileSong').files[0].name,
                            dataUrlSong
                        ]
                        console.log(test);
                        test2 = JSON.stringify(test);
                        $.ajax({
                            url: 'php/insertSong.php',
                            type: 'post',
                            data: {
                                json: test
                            },
                            success: (data) => {
                                console.log('data');
                                console.log(data);
                            }
                        });


                        // fetch('php/insertSong.php?data=' + test2

                        //     ).then(function(response) {

                        //         return response.json();
                        //     })
                        //     .then(function(myBlob) {
                        //         // var objectURL = URL.createObjectURL(myBlob);
                        //         // myImage.src = objectURL;
                        //         console.log(myBlob);
                        //         console.log(myBlob.text());
                        //         console.log(myBlob.array());
                        //     });
                    };
                    fr2.readAsDataURL(document.getElementById('fileSong').files[0]);
                };


                fr.readAsDataURL(document.getElementById('imgSong').files[0]);

                // fr2.readAsFile(document.getElementById('fileSong').files[0]);

            }
        });
        // console.log('title');
        // console.log(addSongForm.value[0]);
        // console.log('tag');
        // console.log(addSongForm.value[1]);
        // console.log('imgSong');
        // console.log(addSongForm.value[2]);
        // console.log('dataurlimg');
        // console.log(addSongForm.value[3]);
        // console.log('filesong');
        // console.log(addSongForm.value[4]);
        // console.log('dataUrlSong');
        // console.log(addSongForm.value[5]);
        // console.log('total');
        // console.log(addSongForm.value);

    } else { // if disconnected
        Swal.fire({
            titleText: 'You must be connected to use this !'
        })
    }
}

//ADDPLAYLIST
document.querySelector('#divAddPlaylist img').addEventListener('click', () => { addPlaylist(); });

let tempoListSong = [ //VARIABLE TEMPORAIRE
    "Bonjour",
    "Musique",
    "Beaucoup",
    "Amour",
    "Gloire"
]
let tempoPlaylist = [
    "Beauté"
]

let htmlPlaylistEditor = '<div id="playlist_all"><div id="playlist_wrap"><input type="text" id="playlist_name" name="playlist_name" placeholder="Playlist"><div id="playlist_added">'

for (var i = tempoPlaylist.length - 1; i >= 0; i--) {
    htmlPlaylistEditor += '<div class="playlist_song">' + tempoPlaylist[i] + '</div>'
}

htmlPlaylistEditor += '</div></div><div id="playlist_songs">'

for (var i = tempoListSong.length - 1; i >= 0; i--) {
    htmlPlaylistEditor += '<div class="playlist_song">' + tempoListSong[i] + '</div>'
}

htmlPlaylistEditor += '</div></div>';

async function addPlaylist() {
    if (sessionStorage.getItem('connectedAs') !== null) {
        let addSongForm = await Swal.fire({
            titleText: 'Your playlist',
            html: htmlPlaylistEditor,
            focusConfirm: false,
            preConfirm: () => {

                return [

                ]
            }
        });

    } else { // if disconnected
        Swal.fire({
            titleText: 'You must be connected to use this !'
        })
    }
}