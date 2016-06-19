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

        var addSavedLinksBlock = function(page) {
            oneNoteFactory.createSavedLinksBlockInPage(function (response) {
                alert("added block");
            }, $scope.selectedPage, dataFactory.getAuthentificationToken(), $scope.linkInfo);
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
                oneNoteFactory.getPageContent(function (response) {
                    debugger;
                    var pageHtml = $.parseHTML(response);
                    addSavedLinksBlock($scope.selectedPage);
                }, $scope.selectedPage, dataFactory.getAuthentificationToken());

            }
        }
    });
})(window.angular);