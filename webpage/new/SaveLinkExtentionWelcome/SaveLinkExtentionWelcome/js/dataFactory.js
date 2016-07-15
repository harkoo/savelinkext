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
            //return "EwAIA61DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAcHIbJ2LeiccRRKEFVhhNdRz5tEwcjxBkLbmweCqlQgs4aUfFPYCh5mVD1ioIMX1FL3uADBMgptyfiBNZmQGtahRIlpJqnKIxjyRN+w/ALyiTePdCqrf/ODCPR6M/Bbxl56566bAGz8PRCL0f9Rtwcq6VFSkD1llbLHsmyt0cVeAm1Z0Ureho1e4/7pGTltLQOCJyznL99dbEdOOh4WEv8VLFKo34vJ5/2GfhmbdrL6UW3vsWyQP9kUy8EfK6WXUYiVPmzTUuxPt7cdL+/1VjtWs16YJ8Yp9LstHTwUPT/GytxA/DCpXtWyor4hXP/VIFEfVL6otQPTEFro2MOGOqwkDZgAACMJkd/DCkR5O2AGv9cR7XCwEzJ+SUeh1ij20Up7GZQ1oCqyyYKhnw4EPdocEsVBz2+kNhBI0llxqk/RSCjO0VB5L/Y03CpmSsOE/CPXhW9zBDMfHDImaf4iUq0daCMZUUSjWtFOByO9lfnY//JnVJhZlLjOSVG1NRGmffAuw0poWfbzuhnljd116qfR9hny2lWkSOzXo7LqozXqotJujKXvHIlaBqFl85E3K1wJdOBPX1Ux9sgo8ac/q1zBeaN8tdBWkSr72vDfRox+sG4ucBG13bw76IA2kbvuzhHC+l4HRosPaB+/goQCyr+c5MNngcL+XxViUbeeF2YSNYFHjonBq3j9EaT49pOC5BnlaiIibwDyLYRA5/MNIPha9mOuu8SQ8lQP+ZP+flhvbsrvpuTQkZaINxkH86EB6Kj+rPOKOmXuSVWFOuE5+HZJUCWMayC+ywlABJw5JVOUBwptEQ0ULXypm6jxcm3MOnJvyc9hn9ZWviJscRyXKqEBOWgFnxpGaRSvAd265PXxLjkAjxM+jgO+AINK+TV4WuxC/Z7YFiZpE0vRhRIBVTlr2KWsoexP+q7/r7K3puSi9r5RG/AbdIKAUSUcHoM7jtnyZmRBRqBQl0QLohj1EUpXowkt2EUhR/AE=";
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