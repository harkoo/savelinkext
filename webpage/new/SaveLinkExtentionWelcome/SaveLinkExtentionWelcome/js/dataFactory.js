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

            return "EwCAAq1DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAYgPYDYkwLoZY/wLHuvRyxc7EsNdD40o+1IM9QaJArbE+PcoW+liCYteUpvqlVOBq38y6RL5Naz5B6Gg/f8ptTv0m7C1UiOSn67KrU2KRGd1O9Yvuwx4/0/qvQ1KJrO72FTtlYCmsdjsIFnx8XshJsxY1nceYGWGx8CJPCHX2HjKPiyIcy5hoKv4Vzgmmd7Wk7LXGYk+LzUx8J9aneAFfn4Jq1rX2bvCnsRcBWjO7P5JnLWcM6sTclZJH+mb6PM8maLgisjhMonYAFD+rMkDFDnQa5qT9O+b9wUJTGY2bb8p4e4TpNWsgKHir8Wu4H0nV/1IlESRwdU/tghYSK9wMHgDZgAACDPQMraZCB0DUAF3ov6v79bwKay0RkfE6NLxXm3I6TpXvrDlDGqT3V6xYQ/9Mm2zpBCARBICXAiqs0CIktWtv3wRifMTLUjHpRegRFNHpSFrlNlHUPJAGfz3s2qkVje23JePrdtNRN+G1/wF1yIcEzGfOhJgEZ2blzfOSLXvI/HSHs9/KezfgfPXppgKOP31P3vJD9VaGWVoEX3bxC9RpV0bJbpETiQ2y+4p51HlQvPGUpZ0KIyfbqk/rfPUNTIon6Zp92LzwDmQ4hf5v6zZc1KL3kNpoktTSFtZ+JU8CSVfLCau4qe0UEyZ/kMXAOJuPbUezlhcvcpnGC1yJV3Ot/GDenUEEAbiNuBRPMmMuDY6EtqfQtnAI6jTdiy4MmtRwX/YNFj51NWAJZRLnsxhrdl2mAVzXd1jDYhxXKuO8dsBA84qKWr+ylK5b8gI5pgUT3xuAqBTrUIHQ118AQ==";
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