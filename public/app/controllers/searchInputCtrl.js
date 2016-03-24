/**
 * Created by Admin on 23.03.2016.
 */
angular.module('appSearchInputCtrl', [])
    .controller('searchInputCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.searchButton = function () {
            dataService.getSearchInputDates($scope.searchInput, function (data) {
                $scope.dates = data;
                $scope.start = true;
            })
        }
    }]);