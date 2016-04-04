/**
 * Created by Admin on 25.02.2016.
 */
var myApp = angular.module('myApp', [
    'appViolationsCtrl',
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'appDataService',
    'appFilterSuggestion',
    'appSuggestionService',
    'appViolationsLastMonthCtrl',
    'appSearchInput',
    'appSearchInputSuggestions',
    'appTrainingJquery',
    'appSearchInputCtrl',
    'appIconsSuggestion'

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
            templateUrl: 'templates/searchInput.html',
            controller: 'searchInputCtrl'
        })
        .state('jquery', {
            url: '/jquery',
            templateUrl: 'templates/jquery.html'
        })
});
