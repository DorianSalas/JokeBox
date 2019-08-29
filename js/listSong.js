async function getSongs(url) {
    let oui = await fetch(url);
    // console.log(oui.text());
    return oui.text();
}
songList = null;
// console.log(getSongs('json/listsong.json'));
getSongs('json/listsong.json').then(data => {
    // res.write(data);
    // console.log('test');
    data = JSON.parse(data);
    // res.end()
    // console.log(data);
    let myResultDOM = '';

    // Some things here went to ListFilter.js !!


    jsonFetchedCallback(data); // This function is in 'main.js'
});

document.querySelector('#divAddSong img').addEventListener('click', () => { addSong(); });

function addSong() {
    Swal.fire({
        titleText: 'Add song',
        html: '<div id="addSongInputGroup"><label for="titleSongInput">Title :</label><input type="text" id="titleSongInput"></input><label for="tagSongInput">Tag :</label><input type="text" id="tagSongInput"></input><label for="imgSong">Choisir une image :</label><input type="file" id="imgSong"><label for="fileSong">Song :</label><input type="file" id="fileSong"></div>',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('logUserInput').value,
                document.getElementById('logPassInput').value
            ]
        }
    });
}