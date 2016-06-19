(function (angular) {
    angular.module("extApp").factory("oneNoteFactory", function ($http) {
        var factory = {};

        var groupBySection = function (array) {
            var groupedPages = {};
            var result = [];
            for (var i = 0; i < array.length; ++i) {
                var page = array[i];
                if (groupedPages[page.parentSection.id] === undefined) {
                    groupedPages[page.parentSection.id] = { "section": page.parentSection, "pages": [] };
                    result.push([groupedPages[page.parentSection.id]][0]);
                }
                groupedPages[page.parentSection.id].pages.push(page);
            }
            return result;
        }


        factory.getOneNotePages = function (callback, token) {
            $http(
            {
                method: 'GET',
                url: "https://www.onenote.com/api/v1.0/me/notes/pages",
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            }).success(function (data) {
                var groupedPages = groupBySection(data.value);
                callback(groupedPages);
            }).
        error(function (response) {

        });
        }

        factory.getPageContent = function (callback, page, token) {
            $http(
            {
                method: 'GET',
                url: "https://www.onenote.com/api/v1.0/me/notes/pages/" + page.id + "/content",
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            }).success(function (data) {
                callback(data);
            }).
        error(function (response) {

        });
        }


        factory.createSavedLinksBlockInPage = function(callback, page, token, linkInfo) {
            $http(
                {
                    method: 'PATCH',
                    url: "https://www.onenote.com/api/v1.0/me/notes/pages/" + page.id + "/content",
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                    data: [
                        {
                            'target': 'body',
                            'action': 'append',
                            'content': "<div style='background-color:CC3399;width:500px;font-size:16pt' id='savedLinksBlock'>"+"<p> <a href='"+ linkInfo.url+"'>"+linkInfo.title+"</a>"+ linkInfo.text+"</p><div/>"
                        }
                    ]
                }).success(function(data) {
                    callback(data);
                }).
                error(function(response) {

                });
        }


        return factory;






    });
})(window.angular)