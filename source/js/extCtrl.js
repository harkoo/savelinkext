(function(angular) {
angular.module('extApp').controller('extCtrl', function($scope) {
  		
		$scope.setToken = function(){
			 var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
    		 chrome.tabs.create({ url: newURL });
		}

  		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    	$scope.url = tabs[0].url;    
    	$scope.title = tabs[0].title;
    	$scope.$apply();});

});
})(window.angular);