(function(angular) {
    angular.module('extApp').controller('extCtrl', function ($scope, dataFactory, oneNoteFactory) {

        var proceedLinkOperation = function() {
            if (dataFactory.needAuthentification()) {
                window.location.href = "https://login.live.com/oauth20_authorize.srf?client_id=000000004C18B43F&scope=wl.signin%20wl.basic&response_type=code&redirect_uri=http://savelink.somee.com/";
            }
            oneNoteFactory.getOneNotePages(function(response) {
                $scope.pagesSections = response;
                //$scope.$apply();
            },dataFactory.getAuthentificationToken());
           
        }
        var proceedAuthOperation = function() {
            dataFactory.setAuthentificationToken($scope.initialData.AccessData.access_token);
        }

        if ($scope.initialData.OperationType === "Link") {
            $scope.linkInfo = dataFactory.getLinkInformation();
            proceedLinkOperation();
        }
        if ($scope.initialData.OperationType === "Auth") {
            proceedAuthOperation();
        }

        $scope.value = $scope.initialData.OperationType;

        $scope.selectPage = function(page) {
            $scope.selectedPage = page;
        };

        $scope.saveLinkInfoToPage = function(page) {
            if ($scope.selectedPage) {
                alert("savingPage " + page.title);
                oneNoteFactory.getPageContent(function (response) {
                    debugger;
                    alert(response);
                }, $scope.selectedPage, dataFactory.getAuthentificationToken());

            }
        }
    });
})(window.angular);