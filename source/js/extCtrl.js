(function(angular) {
angular.module('extApp').controller('extCtrl', function($scope) {
  		$scope.setToken = function(){
			 
		}

  		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    	$scope.url = tabs[0].url;    
    	$scope.title = tabs[0].title;
    	
    	var newURL = "http://localhost:5959?url=" + $scope.url + "&title="+ $scope.title;
    	chrome.tabs.create({ url: newURL });
    		

    });

});
})(window.angular);