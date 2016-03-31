"use strict";
/**
 * Created by Admin on 01.03.2016.
 */
angular.module('appDataService', [])
    .factory('dataService', ['$http', function serviceFactory($http) {
        return {
            searchNameByDate: function (callback, dateStart, dateEnd) {
                $http({
                    method: 'GET',
                    url: '/getData',
                    params: {
                        'dateStart': dateStart,
                        'dateEnd': dateEnd
                    }
                })
                    .success(function (data) {
                        return callback(data);
                    })
            },
            getSuggestions: function (inputCharacters, callback) {
                $http({
                    method: 'GET',
                    url: '/getSuggestions',
                    params: {
                        'inputCharacters': inputCharacters
                    }
                })
                    .success(function (data) {
                        return callback(data);
                    })
            },
            getSearchInputDates: function (searchInput, callback) {
                $http({
                    method: 'GET',
                    url: '/getSearchInputDates',
                    params: {
                        'searchInput': searchInput
                    }
                })
                    .success(function (data) {
                        return callback(data);
                    })
            },
            getSearchModelNames: function(model, callback) {
                $http({
                    method: 'GET',
                    url: '/getSearchModelNames',
                    params: {
                        'model': model
                    }
                })
                    .success(function (data) {
                        return callback(data);
                    })
            },
        };
    }]);