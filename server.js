/**
 * Created by Admin on 22.02.2016.
 */

var express = require('express');
//var cors = require('cors');
//var bodyParser = require('body-parser')
var app = express();


//app.use(bodyParser());
//app.use(cors());


app.get('/getData', function (req, res) {

    var fs = require('fs');
    var json;
    fs.readFile('data/complex.json', function (err, logData) {

        if (err) throw err;
        json = JSON.parse(logData);
        //json = logData.toString();
        console.log(json);
        res.send(json);
    });

});


app.listen(8080, function () {
    //console.log('hello');
});