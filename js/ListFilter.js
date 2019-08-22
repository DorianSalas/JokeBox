class ListFilter {

    constructor(data) {
        this.rawData = data; // This is useful for backup (like filter)
        this.data = data; // This is what is actually on screen
        this.sortAlphabeticalAsc();
    }

    render() {
        console.log(this.data);
        console.log(this.rawData);
        let assembledHtml = ''; // create temp variable
        this.data.forEach(element => { // build temp variable
            assembledHtml += ('<div class="song" value="' + element.url + '"> <img src="' + element.thumb + '" class="song_img"> <div class="song_info"> <div class="song_title">' + element.title + '</div> <div class="song_artist">' + element.artist + '</div> </div> </div>');
        });
        document.getElementById('listsong').innerHTML = assembledHtml; // push temp variable
    }

    // SORT
    sortAlphabeticalAsc() {
        this.data = this.rawData;
        this.data.sort((a, b) => {
            if (a.title < b.title) {
                return -5;
            }
            else if (a.title > b.title) {
                return 5;
            }
            else {
                return 0;
            }
        });
        this.render();
    }
    sortAlphabeticalDesc() {
        this.data = this.rawData;
        this.data.sort((a, b) => {
            if (a.title > b.title) {
                return -5;
            }
            else if (a.title < b.title) {
                return 5;
            }
            else {
                return 0;
            }
        });
        this.render();
    }
    sortArtistAsc() {
        this.data = this.rawData;
        this.data.sort((a, b) => {
            if (a.artist < b.artist) {
                return -5;
            }
            else if (a.artist > b.artist) {
                return 5;
            }
            else {
                return 0;
            }
        });
        this.render();
    }
    sortArtistDesc() {
        this.data = this.rawData;
        this.data.sort((a, b) => {
            if (a.artist > b.artist) {
                return -5;
            }
            else if (a.artist < b.artist) {
                return 5;
            }
            else {
                return 0;
            }
        });
        this.render();
    }

    // FILTER
    filter(type) {
        console.log(type);
    }
}