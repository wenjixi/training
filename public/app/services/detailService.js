/**
 * Created by Admin on 08.04.2016.
 */
angular.module('appDetailService', [])
    .factory('detailService', ['dataService', function (dataService) {
        return {
            getDriver: function (value, callback) {
                dataService.getDetailsByGuid(value, callback);
            }
        }
    }]);