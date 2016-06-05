(function(angular) {
    angular.module('extApp').controller('extCtrl', function ($scope, storageFac) {

        var proceedLinkOperation = function (initialData) {
            if (!storageFac.getAuthentificationToken()) {
                window.location.href = "https://login.live.com/oauth20_authorize.srf?client_id=000000004C18B43F&scope=wl.signin%20wl.basic&response_type=code&redirect_uri=http://savelink.somee.com/";
            }
        }


        var initialData = storageFac.getInitialData();
        if (initialData.OperationType === "Link") {
            proceedLinkOperation(initialData);
        }
        $scope.Value = initialData.OperationType;
});
})(window.angular);