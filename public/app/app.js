/**
 * Created by Admin on 25.02.2016.
 */
var myApp = angular.module('myApp', [
    'appViolationsCtrl',
    'ui.router',
    'appDataService',
    'appViolationsLastMonthCtrl',
    'appSearchInputCtrl',
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

        .state('ViolationsLastMonth', {
            url: '/ViolationsLastMonth',
            templateUrl: 'templates/ViolationsLastMonth.html',
            controller: 'violationsLastMonthCtrl'
        })
        .state('SearchInput', {
            url: '/SearchInput',
            templateUrl: 'templates/SearchInput.html',
            controller: 'searchInputCtrl'
        })
});
