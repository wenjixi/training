/**
 * Created by Admin on 10.03.2016.
 */
angular.module('appSearchInputSuggestions', [])
    .directive('searchInputSuggestions', function ($compile, dataService) {
            return {
                require: "^searchInputs",
                link: function (scope, elements, attrs, searchInputDirectiveCtrl) {

                    var template = "<ul class='dropdown-menu' uib-dropdown-menu aria-labelledby='dropdownMenu1'><li ng-repeat='suggestion in suggestions' ng-bind-html='suggestion | filterSuggestion:inputSuggestion' ng-click='selectionSuggestion(suggestion)'></li></ul>";
                    var linkFn = $compile(template);
                    var content = linkFn(scope);
                    $(content).appendTo($('.dropdown'));

                    var charactersCount = 3;
                    scope.$watch(function () {
                        return searchInputDirectiveCtrl.getSearchInput();
                    }, function (value) {
                        if (!value){scope.flag = false;
                            return;}
                        if (scope.flag){
                            searchInputDirectiveCtrl.setShowSuggestions(false);
                            return;
                        }
                        if (value.length >= charactersCount) {
                            searchInputDirectiveCtrl.setShowSuggestions(true);
                            dataService.searchSuggestions(value, function (data) {
                                scope.suggestions = data;
                                scope.inputSuggestion = value;
                            })
                        } else searchInputDirectiveCtrl.setShowSuggestions(false);
                    });
                    scope.selectionSuggestion = function (suggestion) {
                        searchInputDirectiveCtrl.setSelectSuggestion(suggestion);
                        scope.flag = true;
                    }
                }
            }
        }
    )
    .filter('filterSuggestion', function ($sce) {
        return function (str, param) {
            param = param.toLowerCase();
            str = "<span>" + str.substring(0, str.toLowerCase().indexOf(param)) + "</span><span class='green'>" + str.substring(str.toLowerCase().indexOf(param), str.toLowerCase().indexOf(param) + param.length) + "</span><span>" + str.substring(str.toLowerCase().indexOf(param) + param.length) + "</span>";
            return $sce.trustAsHtml(str)
        };

    });

