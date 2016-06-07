(function(angular) {
    angular.module("extApp").factory("oneNoteFactory", function($http) {

        var factory = {};

        factory.getOneNotePages = function(callback, token) {
           

            
            var oauthAccessToken = "EwB4Aq1DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAbraF+GtF5+S5qLv5relxS4UQfHUAovP9nIMOXBkbEaliHcmfjdK7t75LTWVCudby6x0eAMm+X7gufpO56n8CoBF3XuDCf7Etl4jF6j6WwWT87gQrtOs+2ZLk98M2iwe6o6pS5ng2ZlUq3mVfBJO2CPmsBKSUqgcpWoK21qVvERMtbCjlsJy+gujdkBcNeCdBJNdTFiqrHtDjFwEWDBvWKNdAISbD8ds0nXoeItAfcSehalV6iRMgPnAOtj2n+qcCN5YyDVVS1l616t0lzCBxNxqYviWcJX5FXsQnsk7+gAG5mtst7GSzT9OFUEzGTSqOi+e/T8IKdm7dIDaFJGe9Q8DZgAACMPpu72pclU7SAHLWIdHrPcdvx4I7s2tgjiUHaNaIzv09HABO2zgJwZawXoDrSawGrjpWSkUMnbC3dODteay7BGdTLkV4yxBRe25mq6fKtF7ejqOWKussgsidWlU7puFPQQkVSKU7GBi2viziCeSqzg33MJS2B9w/KzyMZUFY69wkffUusR/1Afq0/1Cip3JqRQgUuYh7rOQfRm4yDR8nf+EdRD3nsQFmjfoKQJnFK+rWmqWe8TWOP75k0+4Iau8WdFlnRoLMs/BglCYtyfMzhQuCMy98ZWv7DV4kOBpBy/ldbvYxKfCZpqD82Y7swEpfXPQcMmWZmVuSIG8ZaDd1oPst1Avcg6DyKwXKeAaf0tTbfQL9K7QwgXAeHWlzRvh5Ms+RJGO8t7VOx3dA2GUnYjMjdKf7fHjZlZU7lEGVedG3SVC3pWR22VYKCxxENb0KWG2eAE=";



            $http(
            {
                method: 'GET',
                url: "https://www.onenote.com/api/v1.0/me/notes/pages",
                headers: {
                    'Authorization': 'Bearer ' + oauthAccessToken,
                    'Content-Type': 'application/json'
                }
            }).success(function (data) {
                callback(data);
            }).
        error(function (error) {
            alert("error");
        });
        }

        return factory;


      
        function handleError(response) {
           
            if (
                !angular.isObject(response.data) ||
                !response.data.message
                ) {
                return ($q.reject("An unknown error occurred."));
            }
           
            return ($q.reject(response.data.message));
        }
       
        function handleSuccess(response) {
            return (response.data);
        }

       
    });
})(window.angular)