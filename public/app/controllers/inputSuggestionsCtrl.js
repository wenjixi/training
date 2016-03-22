/**
 * Created by Admin on 22.03.2016.
 */
angular.module('appInputSuggestionsCtrl', [])
    .controller('inputSuggestionsCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.selectionSuggestion = function(suggestion) {
            console.log(suggestion);
        }
    }]);