/**
 * Created by Admin on 25.02.2016.
 */
angular.module('appViolationsCtrl', [])
    .controller('violationsCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.searchButton = function () {
            var dateStart = $scope.dateStart;
            var dateEnd = $scope.dateEnd;
            dataService.searchNameByDate(function (data) {
                $scope.names = data;
            }, dateStart, dateEnd)
        }
    }]);
