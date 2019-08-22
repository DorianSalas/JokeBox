//main.js
	//Main javascript file

async function getPage(url) {
	let res = await fetch(url)
	let text = await res.json()
	return text
}


function jsonFetchedCallback(data) {
    console.log(data);
}