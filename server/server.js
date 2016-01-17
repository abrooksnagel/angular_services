/**
 * Created by abrooksnagel on 1/15/16.
 */
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('server/public'));
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, "/public/views/index.html"))
});

//app.get('/getMyThing', function(request, reponse) {
//    var myThing = [{thing1: 'thing2'}, {thing3: 'thing4'}];
//    response.send(myThing);
//});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port', port);
});


