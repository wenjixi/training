"use strict";
/**
 * Created by Admin on 01.03.2016.
 */
angular.module('appDataService', [])
    .factory('dataService', ['$http', function serviceFactory($http) {
        var newVar = {
            database: function (callback) {
                $http.get('data/database.json')
                    .success(function (data) {
                        return callback(data);
                    })
            },
            searchNameByDate: function (callback, greaterThanDate, lessThanDate) {
                var db;
                var violation;
                newVar.database(function (data1) {
                    db = data1;
                    newVar.vialotaions(function (data2) {
                        violation = data2;
                        callback(resultFn(greaterThanDate, lessThanDate));
                    });
                });

                function resultFn(greaterThanDate, lessThanDate) {
                    var result = new Map();
                    var myMap = new Map();
                    db.forEach(function (item) {
                        item.cars.forEach(function (itemcar) {
                            myMap.set(itemcar.number, item.name);

                        })
                    });

                    violation.forEach(function (item) {
                        if (myMap.has(item.number) && checkDate(item.vialotaionTime, greaterThanDate, lessThanDate)) {
                            result.set(myMap.get(item.number),item.vialotaionTime);
                        }
                    });
                    return Array.from(result);
                }

                function checkDate(checkDate, greaterThanDate, lessThanDate) {
                    if (greaterThanDate || lessThanDate) {
                        if (Date.parse(checkDate) >= Date.parse(greaterThanDate)
                            && Date.parse(checkDate) <= Date.parse(lessThanDate)) {
                            return true;
                        } else return false;
                    }
                    return true;
                }

            },


            vialotaions: function (callback) {
                $http.get('data/vialotaions.json')
                    .success(function (data) {
                        return callback(data);
                    })
            }
        };
        return newVar;
    }]);