function connexionCallback(action) {
    if (action === "ON") {
        console.log("YES " + action);
    }
    else {
        console.log(action);
    }
    if (sessionStorage.getItem('connectedAs') !== null) {
        console.log("Connected !");
    }
    else {
        console.log("...");
    }
}