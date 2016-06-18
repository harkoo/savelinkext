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
            return "EwCAAq1DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAU48dXMOEX/TyNkDY6CzuJ26HMmV0+PdjAJhs31gVbOh1DStfqFfBEnOjJ1O0C9gRouijz/kkwciyy4VQWjge/ilwkh7qZ9kKudyUHXaM/aumgj399GfGbydc7eU4r66oT9BXWQOQS/ZDNL6MXjfKmrrwKG42QOLTi3LJW0ZE2nGO8XQtaMHeMVpnA9kBFdbrizZmp+uA8syToneco2o5mAsGmCBl28rNq3an2pofDLYjsIh+RKHKYp1eWwN4dnrKYkJRQ2oikB1TVXSxxpVnyKXppujmOEQCRHht0FUR6UqvQKiV8avtKRP7oGnIf1f8phIIBOTU4UcAdBx17rLnngDZgAACMijVbGjK/J8UAGbqMjdGLSHlt9eUD/9LligIz8hWol8yY63AIoccHVT1oRc/K/oZMG0u8Icl5SZgAMNxJKsP3OOqvu2T8Wv1HI5RAjmPJetDqKZ58NVcSoQ/h03k2hudH1qmgouJzOUezXjWmKDWkzotUTL5ONFBRlXhXQWTNLD3EVhctW9VCapqwJVyiX0vk03Z9iNgGU/lsE1u79u3bEDJoVCuSW3S02y94WzX/MNBfYHxm5Ql8oPwKl6+g7obF2+nxiBNdRi0OGpsVpPDMAcZEycSNx2wEgkjKbyZEo6q3kG/mop/JjOHVp5U7BZeDQsWT1EbYYyfumEMlStWLbdBCIh2AohqkycnBTb6Ue5keFRhyl1G1q3fugHx9sGqHqxRjDKHt0QaRDh7jLH76pkqqcDhcEv0mSLtf43ja0dbRdxDBi+ZeEl1o+BkSrphY/gGAm5mDouBct8AQ==";
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