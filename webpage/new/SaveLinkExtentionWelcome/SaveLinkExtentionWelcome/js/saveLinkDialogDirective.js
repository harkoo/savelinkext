(function(angular) {
    angular.module("extApp").directive("ngSaveLinkDialog", function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'templ/save-link-dialog.html',
            controller: function($scope, $element) {
            }
        }
    });
})(angular)