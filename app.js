var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static("public"));
app.use('/static', express.static('public'));
var home = String(fs.readFileSync("views/index.html"));
var about = String(fs.readFileSync("views/about.html"));
var contact = String(fs.readFileSync("views/contact.html"));
// create a route
app.get('/', function (req, res) {
res.send(home);
});

app.get('/about', function (req, res) {

 res.send(about);
});

app.get('/contact', function (req, res) {
 res.send(contact);
});

//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Oakdale Electrical app listening at http://%s:%s', host, port);

});
