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
    for (let i = 0; i < data.length; i++) {

        myResultDOM += ('<div class="song" value="' + data[i].url + '"> <img src="' + data[i].thumb + '" class="song_img"> <div class="song_info"> <div class="song_title">' + data[i].title + '</div> <div class="song_artist">' + data[i].artist + '</div> </div> </div>');

    }
    // console.log(myResultDOM);
    let myList = document.querySelector('#listsong');
    // console.log(myList.innerHTML);
    myList.innerHTML = myResultDOM;
    songList = data;

});