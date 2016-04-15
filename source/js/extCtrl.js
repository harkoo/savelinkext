(function(angular) {
angular.module('extApp').controller('extCtrl', ['$scope', function($scope) {
    $scope.text = 'text from controller!!!';
}]);
})(window.angular);