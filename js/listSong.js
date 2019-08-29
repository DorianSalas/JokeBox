async function getSongs(url) {
    let oui = await fetch(url);
    return oui.text();
}
songList = null;
getSongs('../php/songFetchApi.php').then(data => {
    data = JSON.parse(data);
    // Some things here went to ListFilter.js !!
    jsonFetchedCallback(data); // This function is in 'main.js'
});

document.querySelector('#divAddSong img').addEventListener('click', () => { addSong(); });

async function addSong() {
    if (sessionStorage.getItem('connectedAs') !== null) {
        let addSongForm = await Swal.fire({
            titleText: 'Add song',
            html: '<div id="addSongInputGroup"><label for="titleSongInput">Title :</label><input type="text" id="titleSongInput"></input><label for="tagSongInput">Tag :</label><input type="text" id="tagSongInput"></input><label for="imgSong">Choisir une image :</label><input type="file" id="imgSong"><label for="fileSong">Song :</label><input type="file" id="fileSong"></div>',
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
                            document.getElementById('imgSong').files[0],
                            dataUrlImg,
                            document.getElementById('fileSong').files[0],
                            dataUrlSong
                        ]
                        console.log(test);
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