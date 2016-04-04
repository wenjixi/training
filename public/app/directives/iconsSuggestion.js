/**
 * Created by Admin on 31.03.2016.
 */
angular.module('appIconsSuggestion', [])
    .directive('iconsSuggestion', function () {
        return {
            link: function ($scope, element, attrs) {
                if ($scope.suggestion.typeSuggestion == "name") {
                    $scope.img = "/data/icons/man.png";
                } else
                    $scope.img = "/data/icons/cars/" + $scope.suggestion.suggestion + ".png";

            },

            template: "<img ng-attr-src={{img}} />"

        }
    });