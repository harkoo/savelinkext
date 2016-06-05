(function (angular) {
    angular.module('extApp').factory('storageFac', function () {

        function setValueToLocalStorage(key,value) {
            alert("settings value");
        };

        function getInitialData() {
            var initialData = JSON.parse($("#operationData").html());
            if (initialData.AccessData) {
                initialData.AccessData = JSON.parse(initialData.AccessData);
            }
            return initialData;
        }

        function getAuthentificationToken(){
            return localStorage.getItem("sleAuthentificationToken");
        }

        return {
            setValueToLocalStorage: setValueToLocalStorage,
            getInitialData: getInitialData,
            getAuthentificationToken: getAuthentificationToken
        };
    });
})(window.angular);