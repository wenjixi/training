/**
 * Created by Admin on 22.02.2016.
 */

var express = require('express');
//var cors = require('cors');
//var bodyParser = require('body-parser')
var app = express();


//app.use(bodyParser());
//app.use(cors());


var fs = require('fs');

fs.readFile('data/complex.json', function (err, logData) {

    if (err) throw err;

    console.log(logData.toString());
});
/*app.get('data/complex.json', function (req, res) {
 res.send();
 });*/

app.listen(8080, function () {
    //console.log('hello');
});