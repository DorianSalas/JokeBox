class ListFilter {

    constructor(data, updaterFunc) {
        this.rawData = data; // This is useful for backup (like filter)

        this.update = updaterFunc;
        this.sortAlphabeticalAsc();
    }

    render(newData) {
        let assembledHtml = ''; // create temp variable
        newData.forEach(element => { // build temp variable
            assembledHtml += ('<div class="song" value="' + element.title + '.mp3"><img src="img/thumbs/' + element.imgLink + '" class="song_img"> <div class="song_info"> <div class="song_title">' + element.title + '</div> <div class="song_artist">' + element.artist + '</div> </div> <div class="songPanel"> <div class="editBtn needLogin">Edit</div><div class="deleteBtn needLogin">Delete</div></div> </div>');
        });
        document.getElementById('listsong').innerHTML = assembledHtml; // push temp variable
        // let deleteBtns = document.querySelector('.editBtn');

        this.update();
    }

    // SORT
    sortAlphabeticalAsc() {
        let newData = [];
        this.rawData.forEach(element => {
            newData.push(element);
        });
        newData.sort((a, b) => {
            if (a.title.toUpperCase() < b.title.toUpperCase()) {
                return -5;
            } else if (a.title.toUpperCase() > b.title.toUpperCase()) {
                return 5;
            } else {
                return 0;
            }
        });
        this.render(newData);
    }
    sortAlphabeticalDesc() {
        let newData = [];
        this.rawData.forEach(element => {
            newData.push(element);
        });
        newData.sort((a, b) => {
            if (a.title.toUpperCase() > b.title.toUpperCase()) {
                return -5;
            } else if (a.title.toUpperCase() < b.title.toUpperCase()) {
                return 5;
            } else {
                return 0;
            }
        });
        this.render(newData);
    }
    sortArtistAsc() {
        let newData = [];
        this.rawData.forEach(element => {
            newData.push(element);
        });
        newData.sort((a, b) => {
            if (a.artist.toUpperCase() < b.artist.toUpperCase()) {
                return -5;
            } else if (a.artist.toUpperCase() > b.artist.toUpperCase()) {
                return 5;
            } else {
                return 0;
            }
        });
        this.render(newData);
    }
    sortArtistDesc() {
        let newData = [];
        this.rawData.forEach(element => {
            newData.push(element);
        });
        newData.sort((a, b) => {
            if (a.artist.toUpperCase() > b.artist.toUpperCase()) {
                return -5;
            } else if (a.artist.toUpperCase() < b.artist.toUpperCase()) {
                return 5;
            } else {
                return 0;
            }
        });
        this.render(newData);
    }

    // FILTER
    filter(type) {
        let newFiltered = this.rawData.filter(element => {
            return element.tag.trim() === type.trim();
        });
        this.render(newFiltered);
    }
}