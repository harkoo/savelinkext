(function(angular) {
    angular.module("extApp").directive("ngTree", function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'templ/pages-tree.html'
        }
    });
})(angular)