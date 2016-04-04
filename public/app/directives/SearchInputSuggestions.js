/**
 * Created by Admin on 10.03.2016.
 */
angular.module('appSearchInputSuggestions', [])
    .directive('searchInputSuggestions', ['$compile', 'suggestionService', function ($compile, suggestionService) {
        return {
            require: "^searchInputs",
            link: function (scope, elements, attrs, searchInputDirectiveCtrl) {

                var template = "<div class='dropdown open' uib-dropdown is-open='setShowSuggestions'><ul class='dropdown-menu' uib-dropdown-menu><li ng-repeat='suggestion in suggestions' ng-click='selectionSuggestion(suggestion)'><icons-suggestion></icons-suggestion><span ng-bind-html='suggestion.suggestion | filterSuggestion:inputSuggestion'></span></span></li></ul></div>";
                var linkFn = $compile(template);
                var content = linkFn(scope);
                // $(content).appendTo($('.panel'));
                elements.children(0).append($(content));
                var charactersCount = 3;
                scope.$watch(function () {
                    return searchInputDirectiveCtrl.getSearchInput();
                }, function (value) {
                    if (!value)
                        return;
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
                    scope.setShowSuggestions = false;
                };


            }
        }
    }
    ]);

/*   .filter('filterIcon', function ($sce) {
 return function (str, type, value) {
 if (type == "name") {
 str = "<img src='/data/icons/man.png' />" + str;
 } else
 str = "<img src='/data/icons/cars/" + value + ".png' />" + str;
 return $sce.trustAsHtml(str)

 };

 })
 ;*/

