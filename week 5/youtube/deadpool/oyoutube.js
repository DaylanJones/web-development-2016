// wait for page to load
$(window).load(function(){
	var baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20';
	var searchTerm = 'deadpool'; // change this to the word/s you want to search for
	var apiKey = "AIzaSyAoo1wqAKaLeQDZlUHzwsB6W3qT9y8yzP8"; 
	var url = baseUrl + '&q=' + searchTerm + '&key=' + apiKey;

    $.get(url, function (response) {
    	// Check the web developer console for the whole result
    	console.log(response);
    	// all video links will start with this:
    	var videoBaseUrl = 'https://www.youtube.com/watch?v=';
    	// loop through response.items for videos
    	for(var i = 0; i < response.items.length; i++){
    		var videoId = response.items[i].id.videoId;
    		var videoUrl = videoBaseUrl + videoId;

    		// url to a still image representing the video
    		var thumbnailImg = response.items[i].snippet.thumbnails.medium.url;

    		// create link tag, <a>
    		var link = $('<a href="' + videoUrl + '"></a>');

    		// create image tag, <img>
    		var img = $('<img src="' + thumbnailImg + '">');

    		// attach image to link 
    		link.append(img);

    		// put the linked image into the container <div>
    		//      -- see http://api.jquery.com/append/ for more info
    		$('#container').append(link);

    	}

    }, "json"); //end $.get()

}); // end window load listener