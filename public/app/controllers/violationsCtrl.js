/**
 * Created by Admin on 25.02.2016.
 */
angular.module('appViolationsCtrl', [])
    .controller('violationsCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.searchButton = function () {
            var greaterThanDate = $scope.greaterThanDate;
            var lessThanDate = $scope.lessThanDate;
            dataService.searchNameByDate(function (data) {
                $scope.names = data;
            }, greaterThanDate, lessThanDate)
        }
    }]);
