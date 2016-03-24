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
            template: "<div class='panel'><div class='dropdown input-group' uib-dropdown is-open='showSuggestions'><input class='form-control' id='dropdownMenu1' type='text' ng-model='searchInput' /><span class='input-group-btn'><button class='btn btn-default' ng-click='searchButton()'>Search</button></span></div></div>",
            controller: function ($scope) {
                $scope.showSuggestions = false;
                this.getSearchInput = function () {
                    return $scope.searchInput;
                };

                this.setSelectSuggestion = function (value) {
                    $scope.searchInput = value;
                };

                this.setShowSuggestions = function(value){
                    $scope.showSuggestions = value;
                }
            }
        }
    });