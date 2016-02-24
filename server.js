/**
 * Created by Admin on 22.02.2016.
 */

var express = require('express');
var _ = require('lodash');
var app = express();
var fs = require('fs');


var db;
var violation;

fs.readFile('data/database.json', function (err, logData) {
        if (err) throw err;
        db = JSON.parse(logData);
    }
);

fs.readFile('data/vialotaions.json', function (err, logData) {
        if (err) throw err;
        violation = JSON.parse(logData);
    }
);


function resalt() {
    var resalt = [];
    violation.forEach(function (item) {
        var temp = _.filter(db, function (elem) {
            return _.some(elem.cars, ['number', item.number]);
        });

        if (temp.length)(
            resalt.push(temp));

    });

    return resalt;
}


app.get('/getData', function (req, res) {

    res.send(resalt());

});


/*
 var fs = require('fs');
 var json;
 fs.readFile('data/complex.json', function (err, logData) {

 if (err) throw err;
 json = JSON.parse(logData);
 console.log(json);
 });

 app.get('/getData', function (req, res) {

 res.send(json);
 });
 */


app.listen(8080, function () {
    //console.log('hello');
});