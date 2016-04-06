/**
 * Created by Admin on 05.04.2016.
 */
angular.module('appSearchInputService', [])
    .factory('searchInputService', ['dataService', function (dataService) {
        return {
            searchByModel: function (models, search, callback) {
                var promiseArray = [];
                var namesByModelsMap = new Map();
                var uniqueModels = _.uniqBy(models, "model");
                uniqueModels.forEach(function (model) {
                    var promise = new Promise(function (resolve, reject) {
                        dataService.getSearchModelNames(model.model, function (data) {
                            resolve(data);
                        });
                    });
                    promiseArray.push(promise);
                });
                Promise.all(promiseArray).then(function (values) {
                    values.forEach(function (data) {
                        data.forEach(function (item) {
                            if (!namesByModelsMap.has(item.name) && (item.name.toLowerCase().indexOf(search.toLowerCase()) + 1)) {
                                namesByModelsMap.set(item.name, item);
                            }
                        })
                    });
                    return callback(Array.from(namesByModelsMap.values()));
                });

            },
            searchBySearchInput: function (value, callback) {
                dataService.getSearchInputDates(value, callback);
            }
        }
    }]);