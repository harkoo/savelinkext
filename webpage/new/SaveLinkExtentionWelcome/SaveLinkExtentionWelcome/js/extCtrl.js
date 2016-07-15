(function(angular) {
    angular.module('extApp').controller('extCtrl', function ($scope, $sce, dataFactory, oneNoteFactory, $timeout) {
        $scope.isContentLoading = false;

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

        var addSavedLinksBlock = function() {
            oneNoteFactory.createSavedLinksBlockInPage(function (response) {
                debugger;
                $timeout($scope.selectPage($scope.selectedPage),100000);
            }, $scope.selectedPage, dataFactory.getAuthentificationToken(), $scope.linkInfo);
        }

        var addLinkInfoToExistingBlock = function(id) {
            oneNoteFactory.addLinkInforamationToExistingLinkBlock(function(response) {
                $timeout($scope.selectPage($scope.selectedPage), 100000);
            }, $scope.selectedPage, dataFactory.getAuthentificationToken(), $scope.linkInfo, id);
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
            $scope.isContentLoading = true;
            $scope.selectedPage = page;
            oneNoteFactory.getPageContent(function (response) {
               $scope.isContentLoading = false;
                $scope.isPageContentLoaded = true;
                var pageHtml = $.parseHTML(response);
                var saveLinkBlock = $(pageHtml).find("[data-id='savedLinksBlock']");
                if (saveLinkBlock.length >= 1) {
                    $scope.savedLinkHtml = $sce.trustAsHtml(saveLinkBlock[0].outerHTML);
                } else {
                    $scope.savedLinkHtml = $sce.trustAsHtml("<p>Not saved links block yet.</p>");
                }
                //addSavedLinksBlock($scope.selectedPage);
            }, $scope.selectedPage, dataFactory.getAuthentificationToken());



        };

        $scope.saveLinkInfoToPage = function(page) {
            if ($scope.selectedPage) {
                $scope.isContentLoading = true;
                oneNoteFactory.getPageContent(function (response) {
                    $scope.isContentLoading = true;
                    var pageHtml = $.parseHTML(response);
                    var blocks = $(pageHtml).find("[data-id='savedLinksBlock']");
                    if (blocks.length > 0) {
                        addLinkInfoToExistingBlock(blocks[0].id);
                    } else {
                        addSavedLinksBlock();
                    }
                    
                }, $scope.selectedPage, dataFactory.getAuthentificationToken());

            }
        }
    });
})(window.angular);