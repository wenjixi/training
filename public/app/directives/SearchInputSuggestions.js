/**
 * Created by Admin on 10.03.2016.
 */
angular.module('appSearchInputSuggestions', [])
    .directive('searchInputSuggestions', function ($compile, dataService) {
            return {
                require: "^searchInput",
                link: function (scope, elements, attrs, searchInputCtrl) {

                    var template = "<ul class='dropdown-menu' ng-show='showSuggestions' aria-labelledby='dropdownMenu1'><li ng-repeat='suggestion in suggestions'>{{suggestion | filterSuggestion:inputSuggestion}}</li></ul>";
                    var linkFn = $compile(template);
                    var content = linkFn(scope);
                    $(content).appendTo($('.dropdown'));

                    var charactersCount = 3;
                    scope.$watch(function () {
                        return searchInputCtrl.getSearchInput();
                    }, function (value) {
                        if (!value)return;
                        if (value.length >= charactersCount) {
                            scope.showSuggestions = true;
                            dataService.searchSuggestions(value, function (data) {
                                scope.suggestions = data;
                                scope.inputSuggestion = value;
                            })

                        }
                    })

                }
            }
        }
    )
    .filter('filterSuggestion', function () {
        param = "hon";
        console.log("param " + param);

            return function (str) {
                console.log("str " + str);
                return str = "<span>str.substring(0,str.indexOf(param))</span><span id='red'>str.substring(str.indexOf(param),str.indexOf(param)+param.length)</span><span>str.substring(str.indexOf(param)+param.length)</span>";
            };

    });

