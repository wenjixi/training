/**
 * Created by Admin on 21.03.2016.
 */
angular.module('appTrainingJquery', [])
    .directive('trainingJquery', function () {
        return {
            link: function (scope, element, attrs) {
                $('div > h1').addClass('green');
                $("input[name='lname']").val('Family')
            },
            template: "<form><h1>abc</h1><div><h1>div-1</h1><h1>div-2</h1></div><h1>xyz</h1></form><form  name='demo_form'>First name: <input type='text' name='fname'><br>Last name: <input type='text' name='lname'><br><input type='submit' value='Submit'></form>"
        }
    });