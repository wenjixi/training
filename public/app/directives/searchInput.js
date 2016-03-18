/**
 * Created by Admin on 09.03.2016.
 */
angular.module('appSearchInput', [])
    .directive('searchInput', function () {
        return {
            /*            scope: {
             placeholder: "@",
             searchModel: "="
             },*/
            template: "<div class='panel'><div class='dropdown open input-group'><input class='form-control' id='dropdownMenu1' type='text' ng-model='searchInput' aria-expanded='true' /><span class='input-group-btn'><button class='btn btn-default' ng-click='searchButton()'>Search</button></span></div></div>",
            controller: function ($scope) {
                this.getSearchInput = function () {
                    return $scope.searchInput;
                }
            }
        }
    });