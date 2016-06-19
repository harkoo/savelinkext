(function(angular) {
    angular.module("extApp").directive("ngSavedLinks", function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'templ/saved-links.html',
            controller: function($scope, $element) {
            }
        }
    });
})(angular)