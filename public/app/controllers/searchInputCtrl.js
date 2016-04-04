/**
 * Created by Admin on 23.03.2016.
 */
angular.module('appSearchInputCtrl', [])
    .controller('searchInputCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.searchButton = function (models) {
            $scope.driversData = [];
            var promiseArray = [];
            if (models.length) {
                var uniqueModels = _.uniqBy(models, "model");
                uniqueModels.forEach(function (model) {
                    var promise = new Promise(function (resolve, reject) {
                        dataService.getSearchModelNames(model.model, function (data) {
                            var search = $scope.searchInput.toLowerCase();
                            data.forEach(function (item) {
                                if (item.name.toLowerCase().indexOf(search) + 1) {
                                    $scope.driversData.push(item);
                                }
                            });
                            $scope.start = true;
                            resolve();
                        });
                    });
                    promiseArray.push(promise);
                });
                Promise.all(promiseArray).then(function () {
                    $scope.$apply(function () {
                        $scope.driversData = _.uniqBy($scope.driversData, "name");
                    })
                })
            }
            else {
                dataService.getSearchInputDates($scope.searchInput, function (data) {
                    $scope.driversData = data;
                    $scope.start = true;
                })
            }

        }
    }
    ])
;