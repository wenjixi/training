/*
 /!**
 * Created by Admin on 22.02.2016.
 *!/

 */
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var _ = require('lodash');


var myMap = new Map();
var violationInDatabase = new Map();

fs.readFile('data/database.json', function (err, logData) {
        var db;
        if (err) throw err;
        db = JSON.parse(logData);
        db.forEach(function (item) {
            item.cars.forEach(function (itemcar) {
                myMap.set(itemcar.number, item);

            })
        });
    }
);

fs.readFile('data/vialotaions.json', function (err, logData) {
        if (err) throw err;
        var violation;
        violation = JSON.parse(logData);
        violation.forEach(function (item) {
            if (myMap.has(item.number)) {
                violationInDatabase.set(item.vialotaionTime, myMap.get(item.number));
            }
        });
    }
);

function resultFn(dateStart, dateEnd) {
    var result = Array.from(violationInDatabase);
    result = _.filter(result, function (item) {
        return checkDate(item[0], dateStart, dateEnd);
    });
    return result;
}

function checkDate(checkDate, dateStart, dateEnd) {
    if (dateStart || dateEnd) {
        if (Date.parse(checkDate) >= Date.parse(dateStart)
            && Date.parse(checkDate) <= Date.parse(dateEnd)) {
            return true;
        } else return false;
    }
    return true;
}

app.get('/getData', function (req, res) {
    var dateStart = req.param('dateStart');
    var dateEnd = req.param('dateEnd');
    res.send(resultFn(dateStart, dateEnd));


});

app.use(express.static('public/app'));
app.use('/data', express.static('data'));

app.listen(8080, function () {
    console.log('App listening on port 8080!');
});
