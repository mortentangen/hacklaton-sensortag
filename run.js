var sensorApp = require('./sensorApp');
var express = require('express');
var app = express();
 
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('index.html');
});

sensorApp.connect();
app.get('/data', function(req, res) {
	res.send(200, sensorApp.getLux());
});
 
app.listen(3000);