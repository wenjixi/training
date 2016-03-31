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
var db;

fs.readFile('data/database.json', function (err, logData) {
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

function getSuggestions(characters) {
    var search = characters.toLowerCase();
    var result = [];
    resaltDates = [];
    db.forEach(function (item) {
        if (item.name.toLowerCase().indexOf(search) + 1) {
            result.push({
                suggestion: item.name,
                typeSuggestion: "name"
            });

        }
        item.cars.forEach(function (itemcar) {
            if (!_.find(result, ['suggestion', itemcar.name])) {
                if (itemcar.name.toLowerCase().indexOf(search) + 1) {
                    result.push({
                        suggestion: itemcar.name,
                        typeSuggestion: "car"
                    });
                }
            }

        })
    });
    return result;
}

function getSearchInputDates(characters) {
    var search = characters.toLowerCase();
    var resultDates = [];
    db.forEach(function (item) {
        if (!~_.indexOf(resultDates, item)) {
            if (item.name.toLowerCase().indexOf(search) + 1) {
                resultDates.push(item);
            }
        }
        item.cars.forEach(function (itemcar) {
            if (!~_.indexOf(resultDates, item)) {
                if (itemcar.name.toLowerCase().indexOf(search) + 1) {
                    resultDates.push(item);
                }
            }
        })
    });
    return resultDates;
}


function getSearchModelNames(model) {
    console.log(model);
    var result = [];
    db.forEach(function (item) {
        item.cars.forEach(function (itemcar) {
            if (!~_.indexOf(result, item.name)) {
                if (itemcar.name.indexOf(model) + 1) {
                    result.push(item);
                }
            }
        })
    });
    console.log(result);
    return result;
}

app.get('/getData', function (req, res) {
    var dateStart = req.param('dateStart');
    var dateEnd = req.param('dateEnd');
    res.send(resultFn(dateStart, dateEnd));
});

app.get('/getSuggestions', function (req, res) {
    var inputCharacters = req.param('inputCharacters');
    res.send(getSuggestions(inputCharacters));
});

app.get('/getSearchInputDates', function (req, res) {
    var searchInput = req.param('searchInput');
    res.send(getSearchInputDates(searchInput));
});

app.get('/getSearchModelNames', function (req, res) {
 var model = req.param('model');
 res.send(getSearchModelNames(model));
 });


app.use(express.static('public/app'));
app.use('/node_modules/lodash', express.static('node_modules/lodash'));
app.use('/data', express.static('data'));

app.listen(8080, function () {
    console.log('App listening on port 8080!');
});
