var express = require('express'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path');

var app = express();
var oneYear = 31557600000;

app.set('port', (process.env.PORT || 5000));
app.use(compression());
app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'app'), {maxAge: oneYear}));

app.listen(app.get('port'), function(){
  console.log('youtube embedder started on port ' + app.get('port'));
});
