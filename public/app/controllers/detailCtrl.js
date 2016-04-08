/**
 * Created by Admin on 07.04.2016.
 */
angular.module('appDetailCtrl', [])
    .controller('detailCtrl', ['$scope', 'detailService','$stateParams', function ($scope, detailService, $stateParams) {
        detailService.getDriver($stateParams.guid, function(data){
                       $scope.driver = data;

        })
    }]);