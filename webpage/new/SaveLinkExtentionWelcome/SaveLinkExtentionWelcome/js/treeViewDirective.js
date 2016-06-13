(function (angular) {
    angular.module("extApp").directive("ngTree", function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'templ/pages-tree.html',
            scope: {
                pagesSections: "=",
                selectPageFunc: "&"
            },
            controller: function ($scope, $element) {
                $scope.pageClick = function () {
                    this.selectPageFunc({ page: this.page });
                };

                $scope.sectionClick = function(sectionItem) {
                    sectionItem.active = !sectionItem.active;
                }

            }
        }
    });
})(angular)