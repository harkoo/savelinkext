(function(angular) {
    var myApp = angular.module('extApp', []).run(function ($rootScope, dataFactory) {
        $rootScope.initialData = dataFactory.getInitialData();
        if ($rootScope.initialData.OperationType == "Link") {
            debugger;
            dataFactory.setLinkInformation({
                title: $rootScope.initialData.Title,
                url: $rootScope.initialData.Url,
                text: $rootScope.initialData.Text,
            });
        }
    });
})(window.angular);

