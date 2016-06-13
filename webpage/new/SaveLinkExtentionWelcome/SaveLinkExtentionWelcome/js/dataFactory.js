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
            return "EwCAAq1DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAASwdJIU6lXolLx8zyxvGUPTrlexHQCHKUFcHNzuSWuAykGmfHE3VL042C+H3+qbqPBk/RWmfktkbIb1jJmW+pq1adyn1i6xe4YLQ8BX/FB1oEXZNklL2GpyUUv8yYRugiJMB7XJB+oD+fvJHsl2ajwOFN+aPMeuIK5ia0sa4DBLUoHjeCHT4PGyVzrgHGIxhQ5XpIKYbc1ygWkDbFBwQSnou82b1JxJffVW1mNkxqBN859hea0GSPMsnPKIFN4c+pGUHk8LJsQ5QejZ+QyWWx7hDf1JZhI2P6KAFnICTTJCTFLf4a55Dd/uBIXY8g3uAdZRIcNHs7OV0KU/CcqbxZxcDZgAACEMI9gHfnEnWUAFCl773687DMMZMkL2IFnPdQojUUcDIlJ+MIT8lEqT1IWEeG78wOHCb/Lgrs+t9b7epthKFqnEJF//ohTMraGwd/qW7AMrAP0U4o6OvYo5BmLhnTP4yZILDFvvzujDYp6gJ5FpfY0MH98xamHNPiXfp+AyECy9Hnj2FhYGDIvht23BV2g8Ue2u/34ZL3v3ixzRZZXpd7Pr66u43r8SsCttZaU+vUauGoIHwzvUE5CeDh8Qzb4RwnpvDs8gdXzckfp8agYWKCFA3UfUMiTAHLrgreNYFYvrgrxV02XI9dNk+lYppwErzJR69UuF8JbCVt+qGatM1fy7enQ6Y6ANTJyfQ+z25GkTj0RFWtZhzDoU4ijMTFWMgVUi1d8RZ+UoueXb6nhWBvAzAPVgTXDP6tgPK9ZoMH3241ZZPase4tvAthCj1PwBLQ53GR+P1yC7RSs58AQ==";
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