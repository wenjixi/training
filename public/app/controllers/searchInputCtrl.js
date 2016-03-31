/**
 * Created by Admin on 23.03.2016.
 */
angular.module('appSearchInputCtrl', [])
    .controller('searchInputCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.searchButton = function (models) {
            $scope.dates = [];
            if (models.length&&(!_.find(models, ['model', $scope.searchInput]))){
                models.forEach(function (model) {
                    dataService.getSearchModelNames(model.model, function (data) {
                        var search = $scope.searchInput.toLowerCase();
                        data.forEach(function (item) {
                            if (!~_.indexOf($scope.dates, item)) {
                                if (item.name.toLowerCase().indexOf(search) + 1) {
                                    $scope.dates.push(item);
                                }
                            }

                        });
                        $scope.start = true;
                    })
                })
            } else {
                dataService.getSearchInputDates($scope.searchInput, function (data) {
                    $scope.dates = data;
                    $scope.start = true;
                })
            }
        }
    }]);