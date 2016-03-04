/*
/!**
 * Created by Admin on 22.02.2016.
 *!/

*/
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');


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

function resultFn(dateStart, dateEnd) {
    var result = new Map();
    var myMap = new Map();
    db.forEach(function (item) {
        item.cars.forEach(function (itemcar) {
            myMap.set(itemcar.number, item.name);

        })
    });

    violation.forEach(function (item) {
        if (myMap.has(item.number) && checkDate(item.vialotaionTime, dateStart, dateEnd)) {
            result.set(myMap.get(item.number), item.vialotaionTime);
        }
    });
    return Array.from(result);
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
    console.log('Example app listening on port 8080!');
});
