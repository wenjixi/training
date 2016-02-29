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
    var myMap = new Map();
       db.forEach(function (item) {
        item.cars.forEach(function (itemcar) {
            myMap.set(itemcar.number, "number");
        })
    });
    violation.forEach(function (item) {
        if (myMap.has(item.number)) {
            resalt.push(item)
        }
    });

    return resalt;
}

app.get('/getData', function (req, res) {
    res.send(resalt());

});

app.get('/', function (req, res) {

    var options = {
        root: __dirname + '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    res.sendFile('app/index.html', options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', fileName);
        }
    });

});
/*    res.send(app/index.html);
});*/


app.listen(8080, function () {
    });