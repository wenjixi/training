/**
 * Created by Admin on 24.03.2016.
 */
angular.module('appSuggestionService', [])
    .factory('suggestionService', ['dataService', function (dataService) {
        return {
            searchSuggestions: function (value, callback) {
                dataService.getSuggestions(value, callback);
            }
        }
    }]);