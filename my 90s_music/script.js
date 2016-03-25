document.addEventListener("DOMContentLoaded", function (event){

	var myImg = [

	myImg.src = "images/image01.jpg";
	myImg.src = "images/image02.jpg";
	myImg.src = "images/image03.png";
	myImg.src = "images/image03.png";
	myImg.src = "images/image04.png";
	];

	var galleryContainer = document.querySelector(".container");



	for (var i =0; i< myImg.length ; i++) {
		var myDiv = document.createElement("div");
		myDiv.className = "gallery";
		myDiv,innerHTML = myImg[i];
		galleryContainer.appendChild(myDiv);

	}
});