/**
 * Created by Admin on 10.03.2016.
 */
angular.module('appSearchInputSuggestions', [])
    .directive('searchInputSuggestions', function ($compile, suggestionService) {
            return {
                require: "^searchInputs",
                link: function (scope, elements, attrs, searchInputDirectiveCtrl) {

                    var template = "<div class='dropdown open' uib-dropdown is-open='setShowSuggestions'><ul class='dropdown-menu' uib-dropdown-menu><li ng-repeat='suggestion in suggestions' ng-bind-html='suggestion.suggestion | filterSuggestion:inputSuggestion | filterIcon:suggestion.typeSuggestion:suggestion.suggestion'  ng-click='selectionSuggestion(suggestion)'></li></ul></div>";
                    var linkFn = $compile(template);
                    var content = linkFn(scope);
                    $(content).appendTo($('.panel'));

                    var charactersCount = 3;
                    scope.$watch(function () {
                        return searchInputDirectiveCtrl.getSearchInput();
                    }, function (value) {
                        if (!value)
                            return;

                        if (scope.flagNoShowSuggestions) {
                            scope.setShowSuggestions = false;
                            scope.flagNoShowSuggestions = false;
                            return;
                        }

                        if (value.length >= charactersCount) {
                            scope.setShowSuggestions = true;
                            suggestionService.searchSuggestions(value, function (data) {
                                scope.suggestions = data;

                            });
                            scope.inputSuggestion = value;
                        } else scope.setShowSuggestions = false;
                    });

                    scope.selectionSuggestion = function (suggestion) {
                        if (suggestion.typeSuggestion == "car") {
                            var model = {
                                model: suggestion.suggestion,
                                img: "/data/icons/cars/" + suggestion.suggestion + ".png"
                            };
                            searchInputDirectiveCtrl.addModels(model);
                        }
                        searchInputDirectiveCtrl.setSelectSuggestion(suggestion.suggestion);
                        scope.flagNoShowSuggestions = true;
                    };


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

    })
    .filter('filterIcon', function ($sce) {
        return function (str, type, value) {
            if (type == "name") {
                str = "<img src='/data/icons/man.png' />" + str;
            } else
                str = "<img src='/data/icons/cars/" + value + ".png' />" + str;
            return $sce.trustAsHtml(str)

        };

    })
;

