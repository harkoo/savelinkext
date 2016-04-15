(function(angular) {
angular.module('extApp').controller('extCtrl', function($scope) {
  		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    	$scope.url = tabs[0].url;    
    	$scope.title = tabs[0].title;
    	$scope.$apply();});  
});
})(window.angular);