/**
 * Created by Admin on 25.02.2016.
 */
var myApp = angular.module('myApp', [
    'appViolationsCtrl',
    'ui.router',
    'ngSanitize',
    'appDataService',
    'appViolationsLastMonthCtrl',
    'appSearchInput',
    'appSearchInputSuggestions'

]);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'violationsCtrl'
        })

        .state('violationsLastMonth', {
            url: '/violationsLastMonth',
            templateUrl: 'templates/violationsLastMonth.html',
            controller: 'violationsLastMonthCtrl'
        })
        .state('searchInput', {
            url: '/searchInput',
            templateUrl: 'templates/searchInput.html'
        })
});
