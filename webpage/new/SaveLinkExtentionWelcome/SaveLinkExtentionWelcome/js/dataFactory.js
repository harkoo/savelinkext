(function (angular) {
    angular.module('extApp').factory('dataFactory', function () {

        var authentificationTokenKey = "sleAuthentificationToken";

        var getInitialData = function () {
            var initialData = JSON.parse($("#operationData").html());
            if (initialData.AccessData) {
                initialData.AccessData = JSON.parse(initialData.AccessData);
            }
            return initialData;
        }

        var getAuthentificationToken = function () {
            return "EwCAAq1DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAV8dEZjUYKtsZhcgWDlbMmudPEvyRJfjXRnETFTnLU15yRKGwegWU1/Qi6/fmX2qs1yv40bAIHR4Z+n34dNb21yTW4i7Jn4RoNPQMlyKRfw7QYgUdlcuPSJP3rtsq2x7yNLSZibnZKDCrOfUzv27m6IWDdOTplarwAu0LKiHfwkgZZFWAI3FlCSjLXLKSl7oTknq0CpL8y8Pd12DndJE0cgfEPztkv6osqQGYnpE1l/qZ2g7aXyoe9QMN8xYEK9EIOPmbarRj9UJ2jkpqKdgre410jsZKSECN2vUHzWmVoGlYb9BtSaLfOc+evr+aAqp4guKa18N/9Nvzv7xpyZZNgUDZgAACF+fQ/7c8q9vUAE3cZte49XgDEvM+v48D4V8ZEPUurmdVDp8mKGCl2MRhBeaYmAh2q4BDljZdhcNWFmSdWXaJnROHlNhdpa5x82FnciFLhqC2UBTea8gFpNkZ+pGaNIphdiH22+opnC2u4J7rwwuXmYw4CRVDyuvKhevwc8fyTie2kkAh77ve8Ur/B3dGOdoBWdHw4Hu5VND+4aPDXyEg+m6gXpWTz/AZdKeiqr83cPnwdHBctYxrCoPBfguvzoKWbmLBiaF6HXb1h0g7gm2Tp6sQW2XqO1cm2A9WSNHlAo7buwNzxLNbe9gvhqVRkgKJNcfjrh8YPytVliKrgFoyWd4aVp/U7NV8CM21z5g4H9B9la+KCjDY58T7cOrHqzIxzpwHWmTmcw6JUsYbngPMIZCoyNycl9QikmkkD+6s9L1YB0K3NBQtKMzznfv+h6Bwx1xe97yVdMVrkh8AQ==";
            return localStorage.getItem(authentificationTokenKey);
        }

        var setAuthentificationToken = function (token) {
            localStorage.setItem(authentificationTokenKey, token);
        }

        var needAuthentification = function () {
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