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


/*function resalt() {
 var resalt = [];
 violation.forEach(function (item) {
 var temp = _.filter(db, function (elem) {
 return _.some(elem.cars, {'number': item.number});
 });

 if (temp.length)(
 resalt.push(temp));

 });

 return resalt;
 }*/

function resalt() {
    var resalt = [];
    db.forEach(function (item) {
        item.cars.forEach(function (itemcar) {
            var temp = _.filter(violation, {'number': itemcar.number});
            if (temp.length)(
                resalt.push(temp));
        });
    });

    return resalt;
}


app.get('/getData', function (req, res) {

    res.send(resalt());

});


app.listen(8080, function () {
    //console.log('hello');
});