/**
 * Created by Admin on 09.03.2016.
 */
angular.module('appSearchInput', [])
    .directive('searchInputs', function () {
        return {
            scope: {
                searchInput: "=",
                searchButton: "&"
            },
            templateUrl: 'templates/searchInputsDirectiveTamplate.html',
            controller: function ($scope) {
                $scope.delModels = function (model) {
                    _.pull($scope.models, model)
                };

                $scope.models = [];
                this.addModels = function (model) {
                    $scope.models.push(model);
                };

                this.getSearchInput = function () {
                    return $scope.searchInput;
                };

                this.setSelectSuggestion = function (value) {
                    $scope.searchInput = value;
                };
            }
        }
    });