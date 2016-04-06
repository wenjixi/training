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
            controller: function ($scope, $element) {

                $element.find('input').get(0).addEventListener('focus', function () {
                    $element.find('div').get(0).classList.add('focused');
                }, true);

                $element.find('input').get(0).addEventListener("blur", function () {
                    $element.find('div').get(0).classList.remove('focused');
                }, true);

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