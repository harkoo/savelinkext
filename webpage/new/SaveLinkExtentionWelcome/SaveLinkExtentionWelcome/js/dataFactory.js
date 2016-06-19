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
            return "EwCAAq1DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAARc2ZeKSMaB3nnlHGXVUv3hCYRe1jpo7ETfN4tYFvTXJx2lT0Afm1q/zDgVAofxLdTAk/LDI4ax1I24zqNngaKzWR330ykLiQ9FHYn+W4Xs9iCOIbbV7SOxfY+k27M0GPEpHBfcaqp/+DXu4Biel0IfvpqMblByL5BI+gbkdDZ3DeEvpMb0ou2BFQiOOT4Zp46IQPskEWnKwn71MnQcQiI7ffDSTF6DtSzMwkZWIanY0yN4NLYWu4HMLcAe7stsglbQ0rA32+yh99VU47xdD41sM7yyZFYjTQucAKVSqQNjzBZ5ilURXs2V3Qdi9KUv5pTBtw8vRBfhvYi9uB9SHxCUDZgAACJAj4TtUCdAWUAFaRwavpgfR5eCaBAzWHJWYXhHwkbx6cks9dA4kkU9+gG4TN4Cln/IZW8HYvt5OCsQ6rnvIIccjId4Y6AH7MGjntnVjTudXQPPSWoQV+ZheN1kXt4FBBiaHX66Up42YPuUPXm3nu0dtnyaye7rlIjHRyzt09gohbVpVk/XQH3d03g/zK33JadeSXsczawjQlOZGVfQJAxUE7oYDU0nhQcvc0hI9skbofEZHauDDAtPCGcDwaAkN7lO9BWkVJHPAgZJpE96/r1ZaPXLDSxifL0ggzs8WJEzsXB3dP4LR+iizauVdP1c4LrKJZ6Vtfeop3XohSs4tBf5WL8BJIYUG+bQ0SxN7K2ULuUSv2aVEdAoqk14x/3NaXSHt8qhZt+bW+QpdWSvw3y7nQNKyF20C6WRomuz3mVLcd/hgu4+n9xXIIra9P/ZI0dxqrsiOhxyAmSl8AQ==";
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