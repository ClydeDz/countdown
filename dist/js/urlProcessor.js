"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UrlProcessor {
    hasQueryString(url) {
        if (url.length > 0 && url.indexOf('?') < 1) {
            return false;
        }
        var queryStringSection = url.substring(url.indexOf('?') + 1);
        if (queryStringSection == undefined) {
            return false;
        }
        return queryStringSection.length > 0;
    }
    parseQueryString(queryString) {
        // if the query string is NULL
        if (queryString == null) {
            queryString = window.location.search.substring(1);
        }
        var params = new Map();
        var queries = queryString.split("&");
        queries.forEach((indexQuery) => {
            var indexPair = indexQuery.split("=");
            var queryKey = decodeURIComponent(indexPair[0]);
            var queryValue = decodeURIComponent(indexPair.length > 1 ? indexPair[1] : "");
            //params[queryKey] = queryValue.toString();
        });
        console.log(params);
        return params;
    }
    ;
}
exports.UrlProcessor = UrlProcessor;
;
