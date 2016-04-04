/**
 * Created by Admin on 31.03.2016.
 */
angular.module('appFilterSuggestion', [])
.filter('filterSuggestion', function ($sce) {
    return function (str, param) {
        param = param.toLowerCase();
        str = "<span>" + str.substring(0, str.toLowerCase().indexOf(param)) + "</span><span class='green'>" + str.substring(str.toLowerCase().indexOf(param), str.toLowerCase().indexOf(param) + param.length) + "</span><span>" + str.substring(str.toLowerCase().indexOf(param) + param.length) + "</span>";
        return $sce.trustAsHtml(str)
    }
});