array myAlbums =         
	[ 
		"DMX.jpg",
	    "Nas.jpg",
	    "Blackstar.jpg",
	    "Jay-Z.jpg",
	    "Raekwon.jpg",
	];
	
for(var i = 0; i < myAlbums.length; i++){
	// create empty img element
	var albumCover = document.createElement("img");
	// add the source
	albumCover.src = myAlbums[i];
	var container = document.getElementById("albumContainer");
    container.appendChild(albumCover);
}
