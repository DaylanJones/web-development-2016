// wait for the DOM to load before you try to access it
document.addEventListener("DOMContentLoaded", function(event) {
	
	// array of names
	var artists = [
	    "DMX",
	    "Nas",
	    "Blackstar",
	    "Jay-Z",
	    "Raekwon",
	]; //end of array

	// get the container <div> 
	var artistContainer = document.querySelector(".container");

	// loop through the names
	for (var i=0; i < artists.length; i++){ 
	    // create <div> element for each student
	    var myDiv = document.createElement("div"); 
	    // give the div a class
	    myDiv.className = "box";
	    // put the name text inside the <div>
	    myDiv.innerHTML = artists[i];
	    // attach to the end of container div
	    artistContainer.appendChild(myDiv);    
	} 
});
