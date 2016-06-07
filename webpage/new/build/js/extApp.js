(function(angular) {
    var myApp = angular.module('extApp', []).run(function ($rootScope, dataFactory) {
        $rootScope.initialData = dataFactory.getInitialData();
    });
})(window.angular);

