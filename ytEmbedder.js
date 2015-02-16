var express = require('express'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path');

var app = express();
var oneYear = 31557600000;

app.set('port', 3333);
app.use(compression());
app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'app'), {maxAge: oneYear}));


var server = http.createServer(app).listen(app.get('port'));
console.log('youtube embedder started on port ' + app.get('port'));
