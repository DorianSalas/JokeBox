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