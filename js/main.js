//main.js
//Main javascript file

async function getPage(url) {
    let res = await fetch(url)
    let text = await res.json()
    return text
}

const filterItemList = document.querySelectorAll(".carouselLine .filterItem");

filterItemList.forEach(element => {
    element.style.backgroundImage = "url('img/filter/" + element.id.toLowerCase() + ".png')";
    element.innerHTML = '<p>'+element.id.toUpperCase()+'</p>';
});

let theFilter;

function jsonFetchedCallback(data) {
    theFilter = new ListFilter(data, getList);

    // let's add the events

    document.getElementById("titleAsc").addEventListener("change", () => {
        theFilter.sortAlphabeticalAsc();
    });
    document.getElementById("titleDesc").addEventListener("change", () => {
        theFilter.sortAlphabeticalDesc();
    })
    document.getElementById("artistAsc").addEventListener("change", () => {
        theFilter.sortArtistAsc();
    })
    document.getElementById("artistDesc").addEventListener("change", () => {
        theFilter.sortArtistDesc();
    })

    for (let i = 0; i < filterItemList.length; i++) {
        filterItemList[i].addEventListener("click", () => {
            theFilter.filter(filterItemList[i].id);
        });
    }

}