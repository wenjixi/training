/**
 * Created by Admin on 10.03.2016.
 */
angular.module('appSearchInputSuggestions', [])
    .directive('searchInputSuggestions', function ($compile, dataService) {
            return {
                scope:{
                    selectionSuggestion: '&'
                },
                require: "^searchInput",
                link: function (scope, elements, attrs, searchInputCtrl) {

                    var template = "<ul class='dropdown-menu' ng-show='showSuggestions' aria-labelledby='dropdownMenu1'><li ng-repeat='suggestion in suggestions' ng-bind-html='suggestion | filterSuggestion:inputSuggestion' ng-click='selectionSuggestion(suggestion)'></li></ul>";
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
    .filter('filterSuggestion', function ($sce) {
        return function (str, param) {
            param = param.toLowerCase();
            str = "<span>" + str.substring(0, str.toLowerCase().indexOf(param)) + "</span><span class='green'>" + str.substring(str.toLowerCase().indexOf(param), str.toLowerCase().indexOf(param) + param.length) + "</span><span>" + str.substring(str.toLowerCase().indexOf(param) + param.length) + "</span>";
            return $sce.trustAsHtml(str)};

    });

