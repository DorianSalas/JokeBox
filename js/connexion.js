/*
This function runs once someone successfully connects on the page (with action === "ON")
It also runs when a user disconnects (with action === "OFF")

Do as you please now
*/

const mainTitle = document.getElementById("mainTitle");

function connexionCallback(action) {
    if (action === "ON") {
        mainTitle.innerText = sessionStorage.getItem("connectedAs");
    }
    else if (action === "OFF") {
        mainTitle.innerText = "JokeBox";
    }

    // sessionStorage.getItem("connectedAs");
}