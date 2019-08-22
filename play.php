<!DOCTYPE html>

<html lang="fr">

	<head>
		<meta charset="utf-8">
        <title>JokeBox</title>
		
	</head>

	<body>
		<div id="audio_player">
			<audio id="player"
	        controls
	        src="/media/examples/t-rex-roar.mp3">
	    	</audio>
    	</div>

    	<a href="#" value="No Halo.mp3" class="song">No Halo</a>
    	<a href="#" value="3 Nights.mp3" class="song">3 Nights</a>
    	<a href="#" value="Yelle - Complètement fou.mp3" class="song">Complètement fou</a>

    	


		<script type="text/javascript">
			let listmusic
			let btn_music

			function getList(){
				btn_music=document.getElementsByClassName("song");
				listmusic=[]

				for (var i = 0; i < btn_music.length; i++) { //peut être parcourir liste autre sens
					listmusic.push(btn_music[i].attributes.value.value)
				}
			}
			getList()
			let playerdiv=document.getElementById("audio_player");
			let player=document.getElementById("player");

			for (let i = 0; i < listmusic.length; i++) {
				console.log(listmusic[i])
				btn_music[i].addEventListener("click",()=>{
					playerdiv.innerHTML="<audio id='player' controls src='music/"+listmusic[i]+"' track='"+i+"'></audio>";
					player=document.getElementById("player");
					console.log(player.attributes.track.value)
					})
			}

			player.addEventListener("ended",()=>{
				//Lecture terminée
				console.log(player.attributes.track.value)
			});

			

		</script>
		

	</body>

</html>