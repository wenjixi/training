/**
 * Created by Admin on 23.03.2016.
 */
angular.module('appSearchInputCtrl', [])
    .controller('searchInputCtrl', ['$scope', 'searchInputService', function ($scope, searchInputService) {
        $scope.searchButton = function (models) {
            $scope.showDataTable = true;
            $scope.driversData = [];
            if (models.length) {
                searchInputService.searchByModel(models, $scope.searchInput, function (data) {
                    $scope.$apply(function () {
                        $scope.driversData = data;
                    });
                });
            }
            else {
                searchInputService.searchBySearchInput($scope.searchInput, function (data) {

                    $scope.driversData = data;

                })
            }

        }
    }
    ])
;