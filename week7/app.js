// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public" directory
app.use(express.static('public'));

app.get("/",function(req,res){

	var data = {
		 pageTitle: "If you love the 90s your at the right place!",
		 pageContent: "This site is design to take you back to the golden era of music, television and film."
	};
	// Render the template using this data
	res.render("page", data);
});

app.get("/cartoons",function(req,res){
	// set up the content
	var data = {
		 pageTitle: "90's Cartoons",
		 pageContent: "One of the best things about the 90s were the cartoons!",
		 photo:'90scartoons.jpg'
	};
	// render the template
	res.render("cartoons", data);
});

app.get("/tv",function(req,res){
	var data = {
		 pageTitle: "90's Television",
		 pageContent: "Nothing better than some awesome 90s television on a Friday night.",
		 photo:'90stv.jpg'
	};
	res.render("tv",data);
});


app.get("/movies",function(req,res){
	var data = {
		 pageTitle: "90's Movies",
		 pageContent: "Can't go wrong with a funny or action 90s movie.",
		  photo:'90smovies.jpg'
	};
	res.render("movies",data);


});app.get("/music",function(req,res){
	var data = {
		 pageTitle: "90's Music",
		 pageContent: "The tunes of the 90s were something special.",
		  photo:'90smusic.png'
	};
	res.render("music",data);


});app.get("/popculture",function(req,res){
	var data = {
		 pageTitle: "90's Pop",
		 pageContent: "From the toys to the clothing, 90s popculture was a thing of beauty.",
		 photo: '90spopculture.jpg'
	};
	res.render("popculture",data);
});

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});


app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(3000, function(){
	console.log( 'Express started on http://localhost:4000; press Ctrl-C to terminate.' );
});