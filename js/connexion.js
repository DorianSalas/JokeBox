/*
This function runs once someone successfully connects on the page (with action === "ON")
It also runs when a user disconnects (with action === "OFF")


This function runs at startup of application with action === "TRY"
This serves as an auto-update when refreshing page

Do as you please now
*/

const mainTitle = document.getElementById("mainTitle");

function connexionCallback(action) {
    if (action === "ON") { // runs upon Login
        mainTitle.innerText = sessionStorage.getItem("connectedAs");
    }



    else if (action === "OFF") { // runs upon Logout
        mainTitle.innerText = "JokeBox";
    }



    else if (action === "TRY") { // runs upon start of application
        if (sessionStorage.getItem("connectedAs") !== null) {
            connexionCallback("ON");
        }
        else {
            connexionCallback("OFF");
        }
    }

    // sessionStorage.getItem("connectedAs");
}