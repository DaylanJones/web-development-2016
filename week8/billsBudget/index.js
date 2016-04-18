// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public" directory
app.use(express.static('public'));

//body parser -- for form processing
app.use(require('body-parser').urlencoded({extended:true}));

// --- ROUTES --- //

app.get('/',function(req,res){	
	res.render('billForm');	
});

// handle the post to the form
app.post('/calc',function(req,res){
	

	var bill1 = Number(req.body.bill1);
	var bill2 = Number(req.body.bill2);
	var bill3 = Number(req.body.bill3);
	var bill4 = Number(req.body.bill4);
	var bill5 = Number(req.body.bill5);

	var totalBills = bill1 + bill2 + bill3 + bill4 + bill5;

		var data = {
			bill1: bill1,
			bill2: bill2,
			bill3: bill3,
			bill4: bill4,
			bill5: bill5,
			totalBills: totalBills
		};


	res.render('results',data);
	
});

// 404 Not found catch-all handler 
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 server error handler 
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

// start server
app.listen(5000, function(){
	console.log( 'Express started on http://localhost:5000; press Ctrl-C to terminate.' );
});