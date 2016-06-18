(function (angular) {
    angular.module('extApp').factory('dataFactory', function () {

        var factory = {};

        var authentificationTokenKey = "sleAuthentificationToken";
        var linkTitleKey = 'sleLinkTitle';
        var linkUrlKey = 'sleLinkUrl';
        var linkTextKey = 'sleLinkTextKey';
        
        factory.getInitialData = function () {
            var initialData = JSON.parse($("#operationData").html());
            if (initialData.AccessData) {
                initialData.AccessData = JSON.parse(initialData.AccessData);
            }
            return initialData;
        }

        factory.getLinkInformation = function () {
            return {
                title: localStorage.getItem(linkTitleKey),
                url: localStorage.getItem(linkUrlKey),
                text: localStorage.getItem(linkTextKey)
            }
        }

        factory.setLinkInformation = function(linkInfo) {
            localStorage.setItem(linkTitleKey, linkInfo.title);
            localStorage.setItem(linkUrlKey, linkInfo.url);
            localStorage.setItem(linkTextKey, linkInfo.text);
        }

        factory.getAuthentificationToken = function () {
            return "EwCAAq1DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAeofLG5Qd2ynLs45EpQOLduMgkLaRKN9b5smpUrAsEUL9xPoDfVWWJ6SobXwKShVEg9PRMsQ5Pbts5PYNf8RqbvGORmJrvC2wCtmnO2P4dFKZxrAowAZFo/73TQvS/JP14K2B5tKZ/ZD8mKek+08kkWzoyiRonT0GP31JDU111wtYBNPgwmetes0lmD97YPpudCyAp10JK3pb2HEfOPySTKOipBdeKk/3C7QCv09piLFWXazTxFbzeTQttiaGQ90scr/FiPLHRi67iMVGok4JVOaZa/uigyQWXOdMOowbsWJgEkdIKbOg6zFOE41XdEowKUqPjjfJxuLFtnVZQR89IADZgAACJnTDbS3PLfYUAGI5TYeYKaSR5BgCqwJObZhA3RISW9FPS+0lSbdhcaRG/wUNazXH9vqFKERDwoNQQs8vrhNWOOYzSwhFquC/8CN9m2evv4EWkj+i4j+AstviCESogTfIqi1/oTOwErl5Y0Rw2GUJoE3IQ27G3oZY4m7kWwR1JjORecQe33CCpki42BSW6XNuiYHyYwgA/j9oDUrjxoXKpGPW1xajqoD1oDYmRlikwd0mtmpfn1xHhQAOwOQXPEbHk+GqPpXmKP4TPlahaSvptMyTBd10XA5xqM5+mVP/ZNDltKg1F6Kj70JaKSkNU7WuCcEK0DHOgDnq8g61wcCk6qPuEBxhsWIPRFFWi79/uV0q52/ZTg4tcfOM95OGKCIzCch/LCl4nk/hA5CBbZXR3lbqmytK258nJV1kpNFHx77AGVHIxvDKrMmilMw8e8PrSdmtT2dVNKpllt8AQ==";
            return localStorage.getItem(authentificationTokenKey);
        }

        factory.setAuthentificationToken = function (token) {
            localStorage.setItem(authentificationTokenKey, token);
        }

        factory.needAuthentification = function () {
            return this.getAuthentificationToken() == null;
        }

        return factory;
    });
})(window.angular);