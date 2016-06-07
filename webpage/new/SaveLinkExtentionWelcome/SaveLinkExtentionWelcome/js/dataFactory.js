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
            return "EwCAAq1DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAX2aG32GgPZDkvETV6yZm4vMYHtIqd4ryQwX9fGIJ9nqZUv2TXqehGFFDMMHZhy6qyE5A1IRDtK4C00HF2feLbGnQUlXcWShP5Ycsec05Nt0PoPkqgOpA9InZUIC5S26RJtbgWZMISJW4iLZwS/JdAJ0kb2X7GOIoAEpJiyc/m5yukwQQW5Jb4rLm78dmxvVwRpq89Q5ZlJuHJeCoA8NmY2JgN4OJFcgoIhWkIUJJ2YJQ7xUZnKKiny6nvBSI/QNlt7vI4QLZWuOR9fFgFtuKHo6mTcpHoiitVten4wanm5SKhQnFU1mzOiX+sQDINgMeOY/F0z+gOLVlWWwGAEydQcDZgAACOWoHUtnMoalUAEjJ/Dr7wfAQFzx19ph7UqAuw+OLe7kEg2m+10VcJLnBaFTJ7RGlzmoUbOmH0k4piyLYglMJLoeRUPBubEoa1nQ1UZX6kkxNgcwXSdM1v11Fr6OAJO5EIpw8yih3Dl6ALJih+Mbwzw9A7F3igei3E0LhB4pi3CLmdGhg6FEeYwBM7CNUzgxgO2sHQ+bSB0gKfSk87yoQqtWzf4x3oZTXKx1QalEk0nVtM7XrZnKaSaGHjH71JycaWjx/lLlGeJfqBTnxF9aDCU5X6NyMmtYkjGRqVQctkU763qQxgJAcfC6UahvFak4DqRLkND7vQ/2wHZ0VXS6Sq0r392pspHJtgVUoBV0YtTVnkWGpMR6KT+BmcgNm04uyIoE89LOiJ5PPWYDJkNhkWoYMwGiUopO/HuxMbZB35BH4FYTePQ8CLwkN3nc82iHNlSIsLWxDm0OUT18AQ==";
            //return localStorage.getItem(authentificationTokenKey);
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