/**
 * Created by Admin on 21.03.2016.
 */
angular.module('appTrainingJquery', [])
    .directive('trainingJquery', function () {
        return {
            link: function (scope, element, attrs) {
                $('div > h1').addClass('green')
            },
            template: "<form><h1>abc</h1><div><h1>div-1</h1><h1>div-2</h1></div><h1>xyz</h1></form>"
        }
    });