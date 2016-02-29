/**
 * Created by Admin on 25.02.2016.
 */
angular.module('appHelloCtrl', [])
    .controller('helloCtrl',['$scope', function($scope){
        $scope.hello = "Hello World";
    }]);
