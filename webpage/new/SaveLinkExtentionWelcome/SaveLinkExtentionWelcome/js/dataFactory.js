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
            return "EwCAAq1DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAZapfBvtPE1zsWgVgA2hM9L0jF0LtNeq9mHPWeih7XkMHd2LpZMttQujiCc7s6uT72bQsHHsoHuvHBCE7wGa84jIq+ma1I01RqzH1fFJEDnGr1V0ZSS+mwU1x6fF1KYJm5YrklTM0BBmZYo1MmgsPv1Yne5p4TbxSF1d2hLsW1+FeWxwfdLVZcZ+N3RfykrfAi8ovix/35et1nCClH7+p7hMd7RN1IpcImF0bSPbEKBQFAq09oQUPYUFQobZFQvq/0ViuD3yq3Zcug2TiuTP5l0YpIxn9ofUNdLm5w/JFHV3xpndMkiRF2GY3V7q1Il5Jx9N3kyYWE7uA9Gemm783h4DZgAACKVrbmSPD+kqUAG3CQAjstLZAFPQPlDC2jGAVmhOeD5OKElW63VILryrTkebD9R+X0YfRG7xqlE673j32QHXn4pj39A09XWVNuPymUc7Q1w75qf1xIMljF0+1OSn291kij8kaRgrNDtOl4936ePYmaJgXrDEBVnKv8Pxipu9RSMsISpfQQe60xv1WfspPhF0cTh1uPyIKbmNq0BbxL+x/Chia/uTzmW4M+c9jCsh1p7dWhI+yQVaFegzgGPxhnmGVd9HyVXZaF9k24zEm+f0lWYF1fpZjEDX3hGmyge6VHDH8YorT4RxBMxnbRLWlMop1It5T4Naxi6dWgETf8Ih20JiY9sjcXd5UzPnHlFrixrE40Z37ZyN0Dl/FlR8/GxlfUFzx9EATSsNV6TR7pFjHgNaTeXHZbSJPy8rm8poVV8fozgqnz6tIkowuB7pEuYbZRFHzSiN/iNuXIl8AQ==";
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