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
            return "EwCAAq1DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAfo2l4itNHF3jgKMaf2wTkK1h/xpZYcrEROTxqVc1yPEWiJg3lGrWwX7KyqbJ34eW6qVlhj8nQBv6ExdCoaflOq/dvCZG+FKajiE8z5+a9HZcnftvoE+KQ/DdpekfoWl7U0D5zxzs+JEf1wnjFh+anSRLp67kAcAHNXfTLCLrwxHoNnVTrFc071SibFmKIdTCgSx9499+DRtMo5n9JnH+zUrguBrPXuAguLs/LDtaUrOCxUipFK0STkXW6mXrSftDOixfqUjtG4wqsr7gMRK/UZn4cx/uWidc4EjhZXNbsbc+bykr1BZJ/QkqY858sc4k9aUoUGbAY2BLx9rShO3yZwDZgAACAFZQn884LV+UAG15P5C+avGSZnhyLVq883efJniGw2+Zln9preV5EIf6NS+Z0k3GzYJKIi2wnYkfzSWElBYO7D1KNp1jVMGN2BIs7Pzh6YLNSNwEiSX2i1SCh1fhm7peA6hGEXw1tCMcYR33bCCTAT6YEiGk2KusnC7LuUB7czU67f7y7ldb11v2NSUvDVtUiSbgipc/ABRFFVfuA0Lkc3oCYbmakX2Q6G+LfxrQVv3kAGhWfSfASPxlce3GgSPW35WMHpB3cT6b/9V9Jeh5dzqlGeYEUzmZ2zyw+T37k57z/RKNyY2Lfcm01bbk3Y51hHPefcpW1iW1gDuMLykaiDz+nL2rph54c4r2bDFlDk4UdbMzw4pO2YwMu1ds9CgR6e0+rmCFPQ4+gUD7HiVDPfl43c1mukmSy5wvVDbra3wUJX1KajmKSBh4UH7/qFuQTarIaj3A9ss1XJ8AQ==";
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