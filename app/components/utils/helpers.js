var axios = require("axios");

//api Key
var apiKey = "a1699c1cddf743888c4fca0bbf277bbc";

//helper functions
var helper = {

    runQuery: function(query, startYear, endYear){


        var apiquery = "https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?";
        apiquery += "api-key=" + apiKey;
        apiquery += "&q=" + query;
        apiquery += "&begin_date=" + startYear + "0101";
        apiquery += "&end_date=" + endYear + "1231";

        return axios.get(apiquery).then(function (response) {

            if(response.data.response.docs[0]) {
                return response.data.response;
            }
            return "";
        });
    },

    getSavedArticles: function () {
        return axios.get("/api");
    },

    postArticle: function (url, title) {
        return axios.post("/api", {
            url: url,
            title: title
        })
    }
};

module.exports = helper;