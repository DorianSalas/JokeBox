let listmusicreal
let btn_music
let playerdiv=document.getElementById("audio_player");
let player=document.getElementById("player");

let endfunc=function(){
	console.log(player.attributes.track.value)
	if (player.attributes.track.value<listmusicreal.length-1) {
		playerdiv.innerHTML="<audio id='player' controls track='"+(player.attributes.track.value++)+"'><source src='music/"+listmusicreal[player.attributes.track.value++]+"' /></audio>"
		player=document.getElementById("player");
		player.onended=endfunc;
		console.log(player.attributes.track.value++)
	}
	else{
		console.log("Fin de la liste")
	}
}

function getList(){
	btn_music=document.getElementsByClassName("song");
	console.log(btn_music)
	console.log(btn_music[0])
	listmusicreal=[]

	for (var i = 0; i < btn_music.length; i++) { //peut être parcourir liste autre sens
		listmusicreal.push(btn_music[i].attributes.value.value)
	}
	console.log(listmusicreal)

	playerdiv.innerHTML="<audio id='player' controls autoplay track='0'><source src='music/"+listmusicreal[0]+"' /></audio>";
	player=document.getElementById("player");
	player.onended=endfunc;

	btn_music[0].className="song play"

	addEventBtn()
}

function addEventBtn(){
	btn_music=document.getElementsByClassName("song");
	console.log(btn_music)
	for (let i = 0; i < btn_music.length; i++) {
		console.log(listmusicreal[i])
		btn_music[i].addEventListener("click",(e)=>{
			console.log(e)
			playerdiv.innerHTML="<audio id='player' controls autoplay track='"+i+"'><source src='music/"+listmusicreal[i]+"' /></audio>";
			player=document.getElementById("player");
			player.onended=endfunc;
			console.log(player.attributes.track.value)

			
			for (let i = 0; i < btn_music.length; i++) {
				btn_music[i].className="song"
			}

			console.log(btn_music[i])
			btn_music[i].className="song play"
			})
	};
}