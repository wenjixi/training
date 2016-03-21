/**
 * Created by Admin on 04.03.2016.
 */
angular.module('appViolationsLastMonthCtrl', [])
    .controller('violationsLastMonthCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        var dateStart = new Date();
        dateStart.setMonth(dateStart.getMonth() - 2);
        var dateEnd = new Date();
        dataService.searchNameByDate(function (data) {
            $scope.names = data;
        }, dateStart, dateEnd)
    }]);