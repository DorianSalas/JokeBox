<!DOCTYPE html>

<html lang="fr">

	<head>
		<meta charset="utf-8">
        <title>JokeBox</title>
		
	</head>

	<body>
		<div id="audio_player">
			<audio id="player"
	        controls>
	        	<source src="" />
	    	</audio>
    	</div>

    	<a href="#" value="No Halo.mp3" class="song">No Halo</a>
    	<a href="#" value="3 Nights.mp3" class="song">3 Nights</a>
    	<a href="#" value="Yelle - Complètement fou.mp3" class="song">Complètement fou</a>

    	


		<script type="text/javascript">
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
				listmusicreal=[]

				for (var i = 0; i < btn_music.length; i++) { //peut être parcourir liste autre sens
					listmusicreal.push(btn_music[i].attributes.value.value)
				}
				console.log(listmusicreal)

				playerdiv.innerHTML="<audio id='player' controls autoplay track='0'><source src='music/"+listmusicreal[0]+"' /></audio>";
				player=document.getElementById("player");
				player.onended=endfunc;
			}
			getList()

			for (let i = 0; i < listmusicreal.length; i++) {
				console.log(listmusicreal[i])
				btn_music[i].addEventListener("click",()=>{
					playerdiv.innerHTML="<audio id='player' controls autoplay track='"+i+"'><source src='music/"+listmusicreal[i]+"' /></audio>";
					player=document.getElementById("player");
					player.onended=endfunc;
					console.log(player.attributes.track.value)
					})
			};

		
			

		</script>
		

	</body>

</html>