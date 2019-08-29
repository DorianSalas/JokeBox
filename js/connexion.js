/*
This function runs once someone successfully connects on the page (with action === "ON")
It also runs when a user disconnects (with action === "OFF")


This function runs at startup of application with action === "TRY"
This serves as an auto-update when refreshing page

Do as you please now
*/

const leftTitle = document.getElementById("divCo");
const mainTitle = document.getElementById("mainTitle");
const rightTitle = document.getElementById("divDeco");

const needLogin = document.getElementsByClassName("needLogin");
const needLogout = document.getElementsByClassName("needLogout");



function connexionCallback(action) {
    if (action === "ON") { // runs upon Login
        mainTitle.innerText = sessionStorage.getItem("connectedAs");
        leftTitle.classList.remove("bgChanging");
        rightTitle.classList.add("bgChanging");
        filterNeedLogin("flex");

        console.log("You are logged in !");
    }


    else if (action === "OFF") { // runs upon Logout
        mainTitle.innerText = "JokeBox";
        rightTitle.classList.remove("bgChanging");
        leftTitle.classList.add("bgChanging");
        filterNeedLogin("none");

        console.log("You are disconnected.");
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



function filterNeedLogin(newStyle) {
    for (let i = 0; i < needLogin.length; i++) {
        needLogin[i].style.display = newStyle;
    }
    for (let i = 0; i < needLogout.length; i++) {
        needLogout[i].style.display = newStyle === "flex" ? "none" : "flex";
    }
}