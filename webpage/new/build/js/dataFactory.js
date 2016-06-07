(function (angular) {
    angular.module('extApp').factory('dataFactory', function () {

        var authentificationTokenKey = "sleAuthentificationToken";

        function getInitialData() {
            var initialData = JSON.parse($("#operationData").html());
            if (initialData.AccessData) {
                initialData.AccessData = JSON.parse(initialData.AccessData);
            }
            return initialData;
        }

        function getAuthentificationToken() {
            return localStorage.getItem(authentificationTokenKey);
        }

        function setAuthentificationToken(token) {
            localStorage.setItem(authentificationTokenKey, token);
        }

        function needAuthentification() {
            return getAuthentificationToken() == null;
        }

        return {
            getInitialData: getInitialData,
            getAuthentificationToken: getAuthentificationToken,
            needAuthentification: needAuthentification,
            setAuthentificationToken: setAuthentificationToken
        };
    });
})(window.angular);