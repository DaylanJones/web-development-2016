var express = require('express');

var app = express();


app.get('/',function(req,res){
	res.send('Hello world');

});

app.get('/about',function(reg,res){
	res.send("<h1>About This Site<h1>");

});

app.get('/news',function(reg,res){
	res.send("<h1>News From Around The World<h1>");

});

app.get('/blog',function(reg,res){
	res.send("<h1>My Blog where I share crazy thoughts<h1>");

});

app.get('/contact',function(reg,res){
	res.send("<h1>Contact Information will be shown here<h1>");

});


app.listen(3000, function () {
    // Print out a message to the console
    console.log('Listening on port 3000!');
});